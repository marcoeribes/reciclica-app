import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CreatePostComponent } from './create-post.component';



@NgModule({
  declarations: [CreatePostComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CreatePostComponent
  ]
})
export class CreatePostModule { }
