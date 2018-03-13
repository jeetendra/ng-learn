import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AHttpInterceptors } from './http-interceptors.service';

@NgModule({
  imports: [
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AHttpInterceptors,
    multi: true
  }],
  declarations: []
})
export class CoreModule { }