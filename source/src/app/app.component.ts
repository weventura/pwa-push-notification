import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { SwUpdate, SwPush } from '@angular/service-worker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'pwa';
  response: any;
  pathIcon: any;
  isLoader: boolean = true;
  isLoaderButton: boolean;
  readonly VALID_PUBLIC: any = 'BGjo4jgTJro8uvtA7klNsmEBA3gZA3pKbt6QMl0KaWgMeH9Nwy0KLfXOdDXFlLjqOpSlGxHyy3beUpyc_Ratrxw';

  constructor(
    public _appService: AppService,
    public swUpdate: SwUpdate,
    public swPush: SwPush
  ) { }

  ngOnInit() {

    if ( 'caches'  in window )  { 
      // Tem suporte! 
      console.log('has support')

      caches.open('data').then((cache) => {
        cache.add('https://api.chucknorris.io/jokes/random');
        // cache.add(new Request ('https://api.chucknorris.io/jokes/random'));

        cache.keys().then((cachedRequests) => { 
          console.log(cachedRequests); // [Request, Request]
        });
      })
    }
    
    this.reloadCache();

    this._appService.getService()
      .subscribe((data) => {
        this.response = data;
        this.pathIcon = this.response.icon_url;
        this.isLoader = false;        
      });
  }

  reloadCache() {
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
          this._appService.sendSubscriptionToTheServer(subscription).subscribe();
          this._appService.sendNotification(subscription).subscribe();
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