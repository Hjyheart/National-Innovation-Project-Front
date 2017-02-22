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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var club_list_component_1 = require('./clubList/club.list.component');
var club_detail_component_1 = require('./clubDetail/club.detail.component');
var club_service_1 = require('../service/club.service');
var club_router_1 = require('./club.router');
var ClubModule = (function () {
    function ClubModule() {
    }
    ClubModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                club_router_1.ClubRoutingModule
            ],
            declarations: [
                club_list_component_1.ClubListComponent,
                club_detail_component_1.ClubDetailComponent
            ],
            providers: [club_service_1.ClubService]
        }), 
        __metadata('design:paramtypes', [])
    ], ClubModule);
    return ClubModule;
}());
exports.ClubModule = ClubModule;
//# sourceMappingURL=club.module.js.map