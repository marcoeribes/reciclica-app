import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PickupCallCardComponent } from './pickup-call-card.component';



@NgModule({
  declarations: [PickupCallCardComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    PickupCallCardComponent
  ]
})
export class PickupCallCardModule { }
