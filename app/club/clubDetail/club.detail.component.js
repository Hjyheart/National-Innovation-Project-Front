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
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var club_service_1 = require('../../service/club.service');
var ClubDetailComponent = (function () {
    function ClubDetailComponent(route, router, clubService) {
        this.route = route;
        this.router = router;
        this.clubService = clubService;
    }
    ClubDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clubId = this.route.snapshot.params['id'];
        this.clubService.getClub(this.clubId)
            .subscribe(function (club) { return _this.club = club; });
    };
    ClubDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-club-detail',
            templateUrl: './club.detail.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, club_service_1.ClubService])
    ], ClubDetailComponent);
    return ClubDetailComponent;
}());
exports.ClubDetailComponent = ClubDetailComponent;
//# sourceMappingURL=club.detail.component.js.map