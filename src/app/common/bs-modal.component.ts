/**
 * Created by dhl on 2016/10/28.
 */
import { Component, ViewChild } from '@angular/core';

// todo: change to ng2-bootstrap
import { ModalDirective } from 'ng2-bootstrap/components/modal/modal.component';
// webpack html imports
let template = require('./bs-modal-component.html');

@Component({
  selector: 'modal-demo',
  template: template
})
export class ModalDemoComponent {
  @ViewChild('childModal') public childModal:ModalDirective;

  public showChildModal():void {
    this.childModal.show();
  }

  public hideChildModal():void {
    this.childModal.hide();
  }
}
