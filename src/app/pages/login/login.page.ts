import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPageForm } from './login.page.form';
import { Store } from '@ngrx/store';
import { show, hide } from 'src/store/loading/loading.actions';
import { AppState } from 'src/store/AppState';
import { login, recoverPassword, recoverPasswordFail, recoverPasswordSuccess } from 'src/store/login/login.actions';
import { ToastController } from '@ionic/angular';
import { LoginState } from 'src/store/login/loginState';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

  form: FormGroup;
  loginStateSubscription: Subscription;

  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<AppState>, 
    private toastController: ToastController, private authService: AuthService) { }

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();

    // subscribed for entire duration of component lifespan
    this.loginStateSubscription = this.store.select('login').subscribe(loginState => {
      this.onIsRecoveringPassword(loginState);
      this.onRecoveredPasswordFailed(loginState);
      this.onRecoveredPasswordSuccess(loginState);
    })
  }

  ngOnDestroy() {
    if (this.loginStateSubscription){
      this.loginStateSubscription.unsubscribe();
    }
  }

  private onIsRecoveringPassword(loginState: LoginState){
    if (loginState.isRecoveringPassword){
      this.store.dispatch(show());
      this.authService.recoverEmailPassword(this.form.get('email')?.value).subscribe(() => {
        this.store.dispatch(recoverPasswordSuccess());
      }, error => {
        this.store.dispatch(recoverPasswordFail({error}))
      });
    }
  }

  private async onRecoveredPasswordSuccess(loginState: LoginState){
    if (loginState.recoveredPassword){
      const toaster = await this.toastController.create({
        position: "bottom",
        message: "Recovery email sent",
        color: "primary"
      });
      toaster.present();
      this.store.dispatch(hide());
    }
  }

  private async onRecoveredPasswordFailed(loginState: LoginState){
    if (loginState.error){
      const toaster = await this.toastController.create({
        position: "bottom",
        message: loginState.error.message,
        color: "danger"
      });
      toaster.present();
      this.store.dispatch(hide());
    }
  }

  login(){
    this.store.dispatch(login());

  }

  register(){
    this.router.navigate(['register']);
  }

  getFormControl(name: string): FormControl {
    return this.form.get(name) as FormControl;
  }

  forgotEmailPassword() {
    this.store.dispatch(recoverPassword());

    /*setTimeout(() => {
      this.store.dispatch(hide())
    }, 3000)*/
  }

}

