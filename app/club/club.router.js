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
var club_list_component_1 = require('./clubList/club.list.component');
var club_detail_component_1 = require('./clubDetail/club.detail.component');
var login_route_guard_service_1 = require('../service/login.route.guard.service');
var clubsRoutes = [
    {
        path: 'clubs',
        component: club_list_component_1.ClubListComponent,
        canActivate: [login_route_guard_service_1.LoginRouteGuard]
    },
    {
        path: 'club/:id',
        component: club_detail_component_1.ClubDetailComponent,
        canActivate: [login_route_guard_service_1.LoginRouteGuard]
    }
];
var ClubRoutingModule = (function () {
    function ClubRoutingModule() {
    }
    ClubRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(clubsRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ClubRoutingModule);
    return ClubRoutingModule;
}());
exports.ClubRoutingModule = ClubRoutingModule;
//# sourceMappingURL=club.router.js.map