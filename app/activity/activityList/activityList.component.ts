/**
 * Created by hongjiayong on 2017/2/27.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from "../../service/login.service";
import {ActivityService} from "../../service/activity.service";
import {Activity} from "../../entity/activity";

@Component({
  moduleId: module.id,
  selector: 'my-activity-List',
  templateUrl: 'activityList.component.html',
  providers: [ActivityService]
})

export class ActivityListComponent implements OnInit{

  private activities: Activity[];

  constructor(
    private router: Router,
    private activityService: ActivityService
  ){}

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities(){
      this.activityService.getActivities()
        .subscribe(
          activities => this.activities = activities
        );
  }
}