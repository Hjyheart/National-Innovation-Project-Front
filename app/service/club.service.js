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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var api_service_1 = require("./api.service");
var ClubService = (function () {
    function ClubService(http, api) {
        this.http = http;
        this.api = api;
    }
    /**
    *获取俱乐部列表
    */
    ClubService.prototype.getClubs = function () {
        return this.http.get(this.api.GETCLUBLIST)
            .map(this.extractData)
            .catch(this.handleError);
        // .catch((error: Response | any) => console.log(error));
    };
    /**
    *获取俱乐部详情
    */
    ClubService.prototype.getClub = function (id) {
        return this.http.get(this.api.GETCLUBDETAIL + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ClubService.prototype.extractData = function (res) {
        console.log(res.json());
        return res.json() || {};
    };
    ClubService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    ClubService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, api_service_1.ApiService])
    ], ClubService);
    return ClubService;
}());
exports.ClubService = ClubService;
//# sourceMappingURL=club.service.js.map