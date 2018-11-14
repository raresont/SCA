import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';

import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html',
  styleUrls: ['./speaker-list.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SpeakerListPage {
  speakers: any[] = [];

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public confData: ConferenceData,
    public inAppBrowser: InAppBrowser,
    public router: Router
  ) {}

  ionViewDidEnter() {
   
  //  this.confData.getSpeakers().subscribe((speakers: any[]) => {
   //   this.speakers = speakers;
   // });
  }
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Lobby', 'First floor', 'Exterior 1', 'Second floor', 'Third floor', '4th floor', '5th floor'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Bin'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Sanitiser'}
  ];
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  
  public chartHovered(e:any):void {
    console.log(e);
  }
  
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
}
