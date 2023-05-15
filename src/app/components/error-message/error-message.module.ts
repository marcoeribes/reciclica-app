import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ErrorMessageComponent } from './error-message.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ErrorMessageComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    ErrorMessageComponent
  ]
})
export class ErrorMessageModule { }
