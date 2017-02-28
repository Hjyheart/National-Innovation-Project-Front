"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by hongjiayong on 2017/2/27.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var activity_service_1 = require("../../service/activity.service");
var ActivityDetailComponent = (function () {
    function ActivityDetailComponent(route, router, activityService) {
        this.route = route;
        this.router = router;
        this.activityService = activityService;
    }
    ActivityDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actId = this.route.snapshot.params['id'];
        this.activityService.getActivity(this.actId)
            .subscribe(function (activity) { _this.activity = activity; }, function (error) { console.log(error); });
    };
    ActivityDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-activity-detail',
            templateUrl: 'activityDetail.component.html',
            providers: [activity_service_1.ActivityService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, activity_service_1.ActivityService])
    ], ActivityDetailComponent);
    return ActivityDetailComponent;
}());
exports.ActivityDetailComponent = ActivityDetailComponent;
//# sourceMappingURL=activityDetail.component.js.map