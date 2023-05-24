import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { CreatePostComponent } from './create-post.component';



@NgModule({
  declarations: [CreatePostComponent],
  imports: [
    CommonModule,
    IonicModule, 
    FormsModule
  ],
  exports: [
    CreatePostComponent
  ]
})
export class CreatePostModule { }
