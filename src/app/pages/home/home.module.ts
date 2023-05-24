import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { PostCardModule } from 'src/app/components/post-card/post-card.module';
import { CreatePostModule } from 'src/app/components/create-post/create-post.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    PostCardModule,
    CreatePostModule
  ],
  declarations: [
    HomePage  
  ]
})
export class HomePageModule {}
