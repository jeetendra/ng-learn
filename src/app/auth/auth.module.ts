import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { Auth } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [LoginComponent, RegisterComponent],
 // providers: [Auth],
  declarations: [LoginComponent, RegisterComponent]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [Auth]
    }
  }
 }
