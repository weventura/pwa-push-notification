import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationComponent } from './notification.component';
import { NotificationRoutingModule } from './notification.routing.module';

@NgModule({
  declarations: [ NotificationComponent ],
  imports: [
    CommonModule,
    NotificationRoutingModule // Module os routes
  ], 
  exports: [ NotificationComponent ]
})
export class NotificationModule { }
