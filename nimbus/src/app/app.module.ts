
import {NgModule} from "@angular/core";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {LoginComponent} from "./features/authentication/login/login.component";
import {ReactiveFormsModule} from "@angular/forms";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {AuthInterceptor} from "./core/interceptors/auth.interceptor";
import {AuthService} from "./core/auth/auth.service";
import { DragDropModule } from '@angular/cdk/drag-drop';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
  ],
  imports: [
    DragDropModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LoginComponent
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
