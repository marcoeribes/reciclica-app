import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent  implements OnInit {
  handlerMessage = '';
  roleMessage = '';

  constructor(private router: Router, private menuCtrl: MenuController) { }

  ngOnInit() {}


  logout() {
    this.menuCtrl.enable(false);
    this.menuCtrl.enable(true);
  }

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {},
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        this.router.navigate(['login']);
      },
    },
  ];
}
