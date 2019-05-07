import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { ProfilesComponent } from './profiles.component';

const profilesRoutes: Routes = [
  { path: '', component: ProfilesComponent },
];
 
@NgModule({
  imports: [ RouterModule.forChild(profilesRoutes)],
  exports: [ RouterModule ]
})
export class ProfilesRoutingModule { }