import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SideBarComponent } from './side-bar.component';

@NgModule({
  declarations: [SideBarComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    SideBarComponent
  ]
})
export class SideBarModule { }
