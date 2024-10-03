import {ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, signal} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {ErrorStateMatcher} from "@angular/material/core";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {NgIf} from "@angular/common";
import {MatButton, MatIconButton} from "@angular/material/button";
import {AuthService} from "../../../core/auth/auth.service";
import {Router, RouterLink} from "@angular/router";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {AuthenticationRequest} from "../../../core/auth/user.model";
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../../../shared/dialogs/error-dialog.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    FormsModule,
    MatFormField,
    ReactiveFormsModule,
    MatInput,
    MatIcon,
    NgIf,
    MatCardHeader,
    MatButton,
    MatIconButton,
    MatProgressSpinner,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  isLoading = false;
  authRequest : AuthenticationRequest = {email: "", password: ""};

  hide = signal(true);

  frmLogin: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router ,
              private dialog: MatDialog) {
    this.frmLogin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.isLoading = true;
    console.log('Iniciar sesión:',
      this.frmLogin.value,
    );

    console.log(this.frmLogin.valid);

    if(this.frmLogin.valid){
      this.authRequest.email = this.frmLogin.value.email;
      this.authRequest.password = this.frmLogin.value.password;

      console.log(this.authRequest);

      this.authService.login(this.authRequest)
        .subscribe({
          next: (response) => {
            console.log('In subscribe');
            this.isLoading = false;
            this.router.navigate(['/dashboard']);
          },
          error: (error) => {
            console.log(error.error.error.message);
            this.isLoading = false;
            this.openErrorDialog(error.error.error.message);

          }
        });
    }

  }

  onRecoverPassword() {
    // Lógica para recuperar la contraseña
    console.log('Recuperar contraseña');
    this.router.navigate(['/dashboard']);
  }

  onRegister() {
    // Lógica para registrar un nuevo cliente
    console.log('Registrar nuevo cliente');
  }

  clickEvent(event:MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }


  openErrorDialog(message: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: { message }
    });
  }

}
