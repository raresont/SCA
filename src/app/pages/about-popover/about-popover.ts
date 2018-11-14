import { Component } from '@angular/core';

import { PopoverController } from '@ionic/angular';

@Component({
  template: `
    <ion-list>
      <ion-item button (click)="close('https://ultrahack.org/')">
        <ion-label>Ultrahack</ion-label>
      </ion-item>
      <ion-item button (click)="close('http://www.kiilto.com/fi/')">
        <ion-label>Kiilto</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://www.hha.org.au/hand-hygiene/what-is-hand-hygiene')">
        <ion-label>Basics of hand hygiene</ion-label>
      </ion-item>
      <ion-item button (click)="support()">
        <ion-label>Support</ion-label>
      </ion-item>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(public popoverCtrl: PopoverController) {}

  support() {
    // this.app.getRootNavs()[0].push('/support');
    this.popoverCtrl.dismiss();
  }

  close(url: string) {
    window.open(url, '_blank');
    this.popoverCtrl.dismiss();
  }
}
