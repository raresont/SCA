import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ConferenceData } from '../../providers/conference-data';

import { Router } from '@angular/router';

@Component({
  selector: 'page-schedule-filter',
  templateUrl: 'schedule-filter.html',
  styleUrls: ['./schedule-filter.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScheduleFilterPage implements AfterViewInit {

  tracks: {name: string, isChecked: boolean, color:string}[] = [];

  constructor(
    public confData: ConferenceData,
    public modalCtrl: ModalController,
    public router: Router,
  ) { }

  // TODO use the ionViewDidEnter event
  ngAfterViewInit() {
    // passed in array of track names that should be excluded (unchecked)
    const excludedTrackNames = []; // this.navParams.data.excludedTracks;

    this.confData.getTracks().subscribe((trackNames: any[]) => {
      trackNames.forEach(trackName => {
        console.log(trackName);
        this.tracks.push({
          name: trackName,
      //    id : trackName.id,
      //    location : trackName.location,
          isChecked: (excludedTrackNames.indexOf(trackName) === -1),
          color:"hsl(" + 1 * Math.random() + ',' +
          (25 + 70 * Math.random()) + '%,' + 
          (85 + 10 * Math.random()) + '%)'
        });
      });
    });
    
  }

  goToSessionDetail(sessionData: any) {
    // go to the session detail page
    // and pass in the session data
  //  this.router.navigateByUrl(`app/tabs/(message:session/${sessionData.id})`);
    this.dismiss();
    this.router.navigateByUrl(`/message/${sessionData.name}`);
  }

  resetFilters() {
    // reset all of the toggles to be checked
    this.tracks.forEach(track => {
      track.isChecked = true;
    });
  }

  applyFilters() {
    // Pass back a new array of track names to exclude
    const excludedTrackNames = this.tracks.filter(c => !c.isChecked).map(c => c.name);
    this.dismiss(excludedTrackNames);
  }

  dismiss(data?: any) {
    // using the injected ModalController this page
    // can "dismiss" itself and pass back data
    this.modalCtrl.dismiss(data);
  }
}
