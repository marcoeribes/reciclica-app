import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterPageForm } from './register.page.form';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/AppState';
import { hide, show } from 'src/store/loading/loading.actions';
import { register, registerFail, registerSuccess } from 'src/store/register/register.actions';
import { RegisterState } from 'src/store/register/RegisterState';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit, OnDestroy {
  registerForm: RegisterPageForm;
  form: FormGroup;
  registerStateSubscription: Subscription;
  newUser: User;

  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<AppState>,
    private toastController: ToastController, private authService: AuthService) { }

  ngOnInit() {
    this.createForm();
    this.form = this.registerForm.getForm();
    this.registerStateSubscription = this.store.select('register').subscribe(registerState => {
  
      
      this.onIsRegistering(registerState);
      this.onIsRegistered(registerState);
      
      this.onError(registerState);
      this.toggleLoading(registerState);
    })
  }

  ngOnDestroy() {
    if (this.registerStateSubscription){
      this.registerStateSubscription.unsubscribe();
    }
  }

  private toggleLoading(registerState: RegisterState){
    if (registerState.isRegistering){
     this.store.dispatch(show());
    } else {
     this.store.dispatch(hide());
    }
 }

 private onIsRegistering(registerState: RegisterState){
  if (registerState.isRegistering){
    this.store.dispatch(show());
   } else {
    this.store.dispatch(hide());
   }
  /*console.log(this.form);
  console.log("name",this.form.get('name')?.value)
  let user = new User();
  //[user.name, user.email, user.password] = [name, email, password];
  this.authService.register(user).subscribe(observer => {
    this.store.dispatch(registerSuccess());
    console.log("new account", observer);
  }, error => {
    console.log("error", error);
    this.store.dispatch(registerFail({error}));
  });*/
 }

 private onIsRegistered(registerState: RegisterState){
  /*if (registerState.isRegistering){
    //this.newUser.id = 5;
    const user = new User();
    const name = this.form.get('name')?.value;
    const email = this.form.get('email')?.value;
    const password = this.form.get('password')?.value;
    [user.name, user.email, user.password] = [name, email, password]
    console.log(user);
    this.authService.register(user).subscribe(observer => {
      this.store.dispatch(registerSuccess());
      console.log("new account", observer);
    }, error => {
      console.log("error", error);
      this.store.dispatch(registerFail({error}));
    });
  }*/
 }

 private async onError(registerState: RegisterState){
   if (registerState.error){
     const toaster = await this.toastController.create({
       position: "bottom",
       message: registerState.error.message,
       color: "danger",
       duration: 5000
     });
     toaster.present();
   }
 }

  private createForm() {
    this.registerForm = new RegisterPageForm(this.formBuilder);
  }

  register(){
    this.registerForm.getForm().markAllAsTouched();
    console.log("form", this.form);
    console.log("user", this.createUser())
    if (this.registerForm.getForm().valid){
      this.store.dispatch(register());
    }
  }

  getFormControl(name: string): FormControl {
    return this.registerForm.getForm().get(name) as FormControl;
  }

  createUser(): User {
    return {
      id: Date.now(),
      name: this.form.get('name')?.value,
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
    }
  }


}
