import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApplication } from '../../application/auth-application';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    public reactiveForm!: FormGroup;
    public errorSession: boolean = false;

    constructor(private fb: FormBuilder, private router: Router, private authApplication: AuthApplication) { }
    //constructor(private _authSvc: AuthService, private router: Router) { }

    ngOnInit(): void {

        this.initForm();
    }

    private initForm(): void {
      this.reactiveForm = this.fb.nonNullable.group({
        username: ['sksmartinez@gmail.com', [Validators.required, Validators.email]],
        password: ['12345', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      });
    }

    public send(): void {

      //this.isSubmitting = true;

      if (this.reactiveForm.valid) {
        const values = this.reactiveForm.value;
        this.router.navigate(['home']);

        //const auth = AuthFactory.create(values.email, values.password);
        //this.authApplication.login(values);
        /*       console.log('Form is valid');
        console.log(this.group.value);
         this.router.navigate(['/driver']);*/ //   driver/list
      } else {
        console.log('Form is invalid');
      }

      //const auth = AuthFactory.create(credentials.correo, credentials.password);



      //this.router.navigate(['/', 'register'])

        /* const { email, password } = this.formLogin.value;
        const credentials = { email, password };

        this._authSvc.sendCredentials(credentials)
            .subscribe(response => {

                console.log('response auth: ', response);

                // Si existe el token, redirecciono al Dashboard
                response.tokenSession
                    ? this.router.navigate(['/', 'tracks'])
                    : (
                        console.log('Pailas, Falló'),
                        this.errorSession = true
                    );

            }); */

    }

}
