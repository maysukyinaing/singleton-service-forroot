import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationManagerComponent } from './components/notification-manager/notification-manager.component';
import { VersioningComponent } from './versioning.component';
import {VersioningRoutingModules} from "./versioning-routing.modules";



@NgModule({
  declarations: [
    NotificationManagerComponent,
    VersioningComponent,
  ],
  imports: [
    CommonModule,VersioningRoutingModules
  ]
})
export class VersioningModule { }
