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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var club_service_1 = require('../../service/club.service');
var ClubListComponent = (function () {
    function ClubListComponent(router, clubService) {
        this.router = router;
        this.clubService = clubService;
    }
    ClubListComponent.prototype.ngOnInit = function () {
        this.getClubs();
    };
    ClubListComponent.prototype.getClubs = function () {
        var _this = this;
        this.clubService.getClubs()
            .subscribe(function (clubs) { return _this.clubs = clubs; });
    };
    ClubListComponent.prototype.test = function () {
        console.log(this.clubs[0]);
    };
    ClubListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-club-list',
            templateUrl: './club.list.component.html',
            providers: [club_service_1.ClubService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, club_service_1.ClubService])
    ], ClubListComponent);
    return ClubListComponent;
}());
exports.ClubListComponent = ClubListComponent;
//# sourceMappingURL=club.list.component.js.map