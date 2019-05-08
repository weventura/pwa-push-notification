import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

const appRoutes: Routes = [
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'profiles', loadChildren: './profiles/profiles.module#ProfilesModule' },
  { path: 'notification', loadChildren: './notification/notification.module#NotificationModule' },
  { path: 'login',   redirectTo: '/login', pathMatch: 'full' },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
