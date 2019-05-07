import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';
import { SwUpdate, SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})

export class NotificationComponent implements OnInit {

  title = 'pwa';
  response: any;
  pathIcon: any;
  user: any;
  isLoader: boolean = true;
  isLoaderButton: boolean;
  readonly VALID_PUBLIC: any = 'BGjo4jgTJro8uvtA7klNsmEBA3gZA3pKbt6QMl0KaWgMeH9Nwy0KLfXOdDXFlLjqOpSlGxHyy3beUpyc_Ratrxw';

  constructor(
    public _notificationService: NotificationService,
    public swUpdate: SwUpdate,
    public swPush: SwPush
  ) { }

  ngOnInit() {
    
    this.reloadCache();

    this._notificationService.getChockNorris()
      .subscribe((data) => {
        this.response = data;
        this.pathIcon = this.response.icon_url;
        this.isLoader = false;       
      });
  }

  reloadCache() {
    console.log(this.swUpdate.isEnabled)
    if ( this.swUpdate.isEnabled ) {
      this.swUpdate.available.subscribe((data) => {
        console.log('available', data)
      });
    }
  }

  subscribeToNotification() {
    this.isLoaderButton = true;

    if (this.swPush.isEnabled) {
      this.swPush
        .requestSubscription({
          serverPublicKey: this.VALID_PUBLIC
        })
        .then(subscription => {
          this._notificationService.sendSubscriptionToTheServer(subscription).subscribe();
          this._notificationService.sendNotification(subscription).subscribe();
          this.isLoaderButton = false;
        })
        .catch(() => { console.error; console.log('catch') });
    }
  }

  activateUpdate() {
    this.swUpdate.activateUpdate()
      .then((res) => {
        console.log('activateUpdate', res);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }

  checkForUpdate() {
    this.swUpdate.checkForUpdate()
      .then((res) => {
        console.log('checkForUpdate', res);
      })
      .catch((err) => {
        console.log('err', err); 
      });
  }

}