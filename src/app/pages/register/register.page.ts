import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterPageForm } from './register.page.form';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: RegisterPageForm;
  form: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  register(){
    this.registerForm.getForm().markAllAsTouched();
    if (this.registerForm.getForm()?.get('confirmPassword')?.value == ''){
      this.registerForm.getForm()?.get('confirmPassword')?.setValue('');
    }

    if (this.registerForm.getForm().valid){
      this.router.navigate(['home']);
    }
  }

  private createForm() {
    this.registerForm = new RegisterPageForm(this.formBuilder);
  }

  getFormControl(name: string): FormControl {
    return this.registerForm.getForm().get(name) as FormControl;
  }


}
