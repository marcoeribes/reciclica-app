import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActionSheetController, IonModal } from '@ionic/angular';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent  implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  @Input() openModal: string;
  @Output() content: string = '';
  presentingElement = undefined;


  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {}

  isPostEmpty(content: string){
    return !content ? true : false;
  }

  createPost(){
    this.canDismiss = async () => true;
    this.modal.dismiss();
  }

  exitModal(){
    this.canDismiss = async () => {
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
    this.modal.dismiss();
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

  canDismiss = async () => false;
}
