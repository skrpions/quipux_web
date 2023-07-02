import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApplication } from '../../application/auth-application';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public reactiveForm!: FormGroup;
    public errorSession: boolean = false;

    constructor(private fb: FormBuilder,
      private authApplication: AuthApplication) { }

    ngOnInit(): void {

        this.initForm();
    }

    private initForm(): void {
      this.reactiveForm = this.fb.nonNullable.group({
        email: ['sksmartinez@gmail.com', [Validators.required, Validators.email]],
        password: ['12345', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
        photo: ['XXX', [Validators.required]],
        first_name: ['NESTOR', [Validators.required, Validators.maxLength(12)]],
        last_name: ['MARTINEZ', [Validators.required, Validators.maxLength(12)]],
      });
    }

    public send(): void {

      if (this.reactiveForm.valid) {
        const data = this.reactiveForm.value;
        this.authApplication.register(data);
      } else {
        console.log('Form is invalid');
      }

    }

}
