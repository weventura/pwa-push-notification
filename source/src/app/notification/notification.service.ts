import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  SERVER_URL: any = 'http://localhost:3000/subscription';
  SERVER_URL_NOTIFICATION: any = 'http://localhost:3000/sendNotification';

  API_CHUCKNORRIS: any = 'https://api.chucknorris.io/jokes/random';


  constructor( private http: HttpClient ) { }

  public getChockNorris() {
    return this.http.get(this.API_CHUCKNORRIS).pipe(map((data: any) => data));
  }

  public sendSubscriptionToTheServer(subscription: PushSubscription) {
    return this.http.post(this.SERVER_URL, subscription);
  }

  public sendNotification(subscription: PushSubscription) {
    return this.http.post(this.SERVER_URL_NOTIFICATION, subscription);
  } 
}
