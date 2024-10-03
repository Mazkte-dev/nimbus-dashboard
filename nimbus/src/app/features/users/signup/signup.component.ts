import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {UserService} from "../../../core/services/user.service";
import {SignupRequest} from "../../../core/auth/user.model";
import {ErrorDialogComponent} from "../../../shared/dialogs/error-dialog.component";
import {SuccessDialogComponent} from "../../../shared/dialogs/success-dialog.component";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    ReactiveFormsModule,
    MatFormField,
    MatButton,
    MatInput,
    NgIf,
    MatProgressSpinner
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  registerForm: FormGroup;
  isLoading: boolean = false;

  email: string = '';
  password: string = '';

  signupRequest: SignupRequest = {name: "",lastName:"",email:"",password:""};

  constructor(private fb: FormBuilder ,
              private userService: UserService,
              private router: Router ,
              private dialog: MatDialog) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {

    this.isLoading = true;

    if (this.registerForm.valid) {
      console.log('Form submitted:', this.registerForm.value);

      this.signupRequest.name = this.registerForm.value.name;
      this.signupRequest.lastName = this.registerForm.value.lastname;
      this.signupRequest.email = this.registerForm.value.email;
      this.signupRequest.password = this.registerForm.value.password;

      this.userService.create(this.signupRequest)
        .subscribe({
          next: (response) => {
            console.log('In subscribe');
            this.isLoading = false;
            this.openSuccessDialog();
          },
          error: (error) => {
            console.log(error.error.error.message);
            this.isLoading = false;
            this.openErrorDialog(error.error.error.message);
          }
        });

    } else {
      // Handle form errors (e.g., display error messages)
    }
  }

  openSuccessDialog() {
    this.dialog.open(SuccessDialogComponent);
  }


  openErrorDialog(message: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: { message }
    });
  }





}
