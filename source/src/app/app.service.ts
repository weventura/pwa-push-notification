import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  SERVER_URL: any = 'http://localhost:3000/subscription';
  SERVER_URL_NOT: any = 'http://localhost:3000/sendNotification';


  constructor( private http: HttpClient ) { }

  getService() {
    return this.http.get('https://api.chucknorris.io/jokes/random')
      .pipe(map((data: any) => data)
    );
  }

  public sendSubscriptionToTheServer(subscription: PushSubscription) {
    return this.http.post(this.SERVER_URL, subscription);
  }

  public sendNotification(subscription: PushSubscription) {
    return this.http.post(this.SERVER_URL_NOT, subscription);
  }
}

