/**
 * Created by hongjiayong on 2017/2/27.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ActivityListComponent } from './activityList/activityList.component';
import {ActivityRoutingModule} from "./activity.routing.module";
import {ActivityDetailComponent} from "./activityDetail/activityDetail.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ActivityRoutingModule
  ],
  declarations: [
    ActivityListComponent,
    ActivityDetailComponent
  ],
  providers: []
})
export class ActivityModule {}