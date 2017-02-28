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
  selector: 'my-activity-detail',
  templateUrl: 'activityDetail.component.html',
  providers: [ActivityService]
})

export class ActivityDetailComponent implements OnInit{

  private actId: string;
  private activity: Activity;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private activityService: ActivityService
  ){}

  ngOnInit(): void{
    this.actId = this.route.snapshot.params['id'];
    this.activityService.getActivity(this.actId)
      .subscribe(
        activity => {this.activity = activity},
        error => {console.log(error)}
      );
  }
}
