import { Component } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'message',
  templateUrl: './message.page.html'
})
export class MessagePage {
  session: any;
  constructor(
    private dataProvider: ConferenceData,
    private route: ActivatedRoute) {}

  ionViewWillEnter() {
    console.log("t");
    this.dataProvider.load().subscribe((data: any) => {
      if (
        data //&&
     //   data.name// &&
     //   data.schedule[0] &&
      //  data.schedule[0].groups
      ) {
        const sessionId = this.route.snapshot.paramMap.get('id').replace("%20", " ");
  //     console.log(sessionId);
        for (const group of data.schedule[0].groups) {
          if (group && group.sessions) {
            for (const session of group.sessions) {
              console.log("failed here");
              if (session && session.tracks[0] === sessionId) {
                console.log(sessionId);
                this.session = session;
                break;
              }
            }
          }
        }
      }
    });
  }
}
