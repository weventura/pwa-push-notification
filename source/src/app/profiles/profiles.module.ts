import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProfilesComponent } from './profiles.component';
import { ProfilesRoutingModule } from './profiles.routing.module';


@NgModule({
  declarations: [ ProfilesComponent ],
  imports: [
    CommonModule,
    FormsModule ,
    ProfilesRoutingModule
  ]
})
export class ProfilesModule { }
