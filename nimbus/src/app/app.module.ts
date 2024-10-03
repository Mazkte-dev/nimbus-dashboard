// ... other imports
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import {NgModule} from "@angular/core";
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptors} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {LoginComponent} from "./features/authentication/login/login.component";
import {ReactiveFormsModule} from "@angular/forms";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {AuthInterceptor} from "./core/interceptors/auth.interceptor";
import {AuthService} from "./core/auth/auth.service";


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    LoginComponent,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideAnimationsAsync(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthService
  ]

})
export class AppModule { }
