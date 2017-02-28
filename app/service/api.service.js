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
var core_1 = require("@angular/core");
var ApiService = (function () {
    function ApiService() {
        this.server = "http://localhost:8080/";
        this.GETCLUBLIST = this.server + "club/all";
        this.GETCLUBDETAIL = this.server + "club/profile?id=";
        this.LOGIN = this.server + "login/check";
        this.GETACTIVITIES = this.server + "act/all";
        this.GETACTIVITY = this.server + "act/profile?id=";
    }
    ApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map