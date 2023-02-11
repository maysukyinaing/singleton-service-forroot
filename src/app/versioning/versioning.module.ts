import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationManagerComponent } from './components/notification-manager/notification-manager.component';
import { VersioningComponent } from './versioning/versioning.component';



@NgModule({
  declarations: [
    NotificationManagerComponent,
    VersioningComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VersioningModule { }
