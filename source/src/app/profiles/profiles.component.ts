import { Component, OnInit } from '@angular/core';
import { ProfilesService } from './profiles.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {

  users: any;
  resultFilter: any = [];
  textFilter: any = '';
  serviceUsers = 'https://jsonplaceholder.typicode.com/users';
  servicePost = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private _profilesService: ProfilesService) { }

  ngOnInit() {

    this._profilesService.getUsers()
      .subscribe((data) => {
        
        this.users = data;
        console.log('consumo', this.users)
      });
  }


  filter(text: any){
    this.resultFilter =  this.users.filter((item: any) =>  item.name.toLowerCase().indexOf(text) > -1 );
  }

  cleanInput() {
    this.textFilter = '';
  }

}


    // if ( 'caches'  in window )  { 
    //   // Tem suporte!  
    //   caches.open('data').then((cache) => {
    //     cache.addAll( [ this.servicePost, this.serviceUsers ] )
    //   })

    //   caches.open('data').then(cache => {
    //     cache.match(this.serviceUsers).then(response => {
    //       response.json().then((dados) => {
    //         console.log('cache', dados);
    //       })
    //     })
    //   })
    // }
