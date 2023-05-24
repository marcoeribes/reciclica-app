import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent  implements OnInit {
  @Input() openModal: string;
  presentingElement = undefined;

  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {}

  canDismiss = async () => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Discard Post? Post won\'t be save',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Discard',
          role: 'discard',
        },
      ],
    });

    actionSheet.present();
    const { role } = await actionSheet.onWillDismiss();
    return role === 'discard';
  }
}
