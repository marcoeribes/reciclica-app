import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent  implements OnInit {
  @Input() message: string;
  @Input() field: FormControl;
  @Input() error: string;

  constructor() { }

  ngOnInit() {}

  shouldShowComponent(){
    if (this.field!.touched && this.field!.errors?.[this.error]){
      return true;
    }
    return false;
  }
}
