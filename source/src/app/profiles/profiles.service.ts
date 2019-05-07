import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  API_USERS: any = 'https://jsonplaceholder.typicode.com/users'
  API_POSTS = 'https://jsonplaceholder.typicode.com/posts';

  constructor( private http: HttpClient ) { }

  public getUsers(id?: any) {
    return this.http.get(`${this.API_USERS}/${ id ? id : ''}`).pipe(map((data: any) => data));
  }
}
