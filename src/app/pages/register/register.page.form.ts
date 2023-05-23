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
            name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
            confirmPassword: ['', Validators.required],

        },

        );

        //form.get('name')?.addValidators(firstAndLastName(form), );
        //form.controls['name']?.addValidators([firstAndLastName(form)])
        form.controls['confirmPassword']?.addValidators([matchPasswords(form)]);
        //form.get('name')?.setValidators(noSpecialCharactersAllowed(form));
        console.log('here');

        return form;
    }

    getForm() : FormGroup {
        return this.form;
    }

}

function matchPasswords(form: FormGroup) : ValidatorFn {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    console.log("confpass", confirmPassword)
    const validatorFn = () => {
        return confirmPassword?.value === password?.value  ? null : {doesNotMatch: true}
    }
    return validatorFn;
}

function firstAndLastName(form: FormGroup) : ValidatorFn {
    const name = form.get('name');
    const validatorFn = () => {
        return (/.(?= .)/).test(name?.value) ? null : {noLastName: true}
    }
    return validatorFn;
}

function noSpecialCharactersAllowed(form: FormGroup) : ValidatorFn {
    const name = form.get('name');
    const validatorFn = () => {
        return name?.value.match('^[a-zA-Z\s]*$') ? null : {noSpecialCharcters: true}
    }
    return validatorFn;
}



/*function matchPasswords() : ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const password = control.get('password');
        const confirmPassword = control.get('confirmPassword');

        if (password && confirmPassword && password.value !== confirmPassword.value){
            return {doesNotMatch: true};
        }

        return null;
    }
}*/