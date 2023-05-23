import { FormBuilder, FormGroup, ValidatorFn, Validators } from "@angular/forms";


export class RegisterPageForm {

    private formBuilder: FormBuilder;
    private form: FormGroup;

    constructor(formBuilder: FormBuilder){
        this.formBuilder = formBuilder;
        this.form = this.createForm(); 
    }

    createForm() : FormGroup {
        let form = this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
            confirmPassword: ['', [Validators.required]]
        });

        //form.get('name')?.setValidators(firstAndLastName(form));
        //form.get('confirmPassword')?.setValidators(matchPasswords(form));
        //form.get('name')?.setValidators(noSpecialCharactersAllowed(form));

        return form;
    }

    getForm() : FormGroup {
        return this.form;
    }

}

function firstAndLastName(form: FormGroup) : ValidatorFn {
    const name = form.get('name');
    const validatorFn = () => {
        return (/^[A-Za-z]+\s[A-Za-z]+$/).test(name?.value) ? null : {noLastName: true}
    }

    return validatorFn;
}

/*function noSpecialCharactersAllowed(form: FormGroup) : ValidatorFn {
    const name = form.get('name');
    const validatorFn = () => {
        return name?.value.match('/^[A-Za-z\s]+$/') ? null : {noSpecialCharcters: true}
    }
    return validatorFn;
}*/

function matchPasswords(form: FormGroup) : ValidatorFn {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    const validatorFn = () => {
        return password?.value === confirmPassword?.value  ? null : {doesNotMatch: true}
    }
    return validatorFn;
}