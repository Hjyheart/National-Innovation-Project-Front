/**
 * Created by hongjiayong on 2017/2/27.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityListComponent } from './activityList/activityList.component'
import {ActivityDetailComponent} from "./activityDetail/activityDetail.component";

const routes: Routes = [
  {
    path: 'activities',
    component: ActivityListComponent
  },
  {
    path: 'activity/:id',
    component: ActivityDetailComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ActivityRoutingModule {}