import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPageForm } from './login.page.form';
import { Store } from '@ngrx/store';
import { show, hide } from 'src/store/loading/loading.actions';
import { AppState } from 'src/store/AppState';
import { login, recoverPassword } from 'src/store/login/login.actions';
import { ToastController } from '@ionic/angular';
import { LoginState } from 'src/store/login/loginState';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<AppState>, 
    private toastController: ToastController) { }

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();

    this.store.select('login').subscribe(loginState => {
      this.onIsRecoveringPassword(loginState);
      this.onRecoveredPassword(loginState);
    })
  }

  private onIsRecoveringPassword(loginState: LoginState){
    if (loginState.isRecoveringPassword){
      this.store.dispatch(show());
    }
  }

  private async onRecoveredPassword(loginState: LoginState){
    if (loginState.isRecoveringPassword){
      this.store.dispatch(hide());
      const toaster = await this.toastController.create({
        position: "bottom",
        message: "Recovery email sent",
        color: "primary"
      });
      toaster.present();
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

