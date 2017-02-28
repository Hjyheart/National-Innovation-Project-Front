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
var login_service_1 = require("../service/login.service");
var LoginComponent = (function () {
    function LoginComponent(route, loginService, router) {
        this.route = route;
        this.loginService = loginService;
        this.router = router;
        this.loginState = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.id = '';
        this.password = '';
        this.loginService.loginOut();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.signIn = function (form) {
        var _this = this;
        console.log(form.value);
        this.loginService.login(this.id, this.password)
            .subscribe(function (data) {
            if (data === true) {
                _this.router.navigate([_this.returnUrl]);
            }
        });
    };
    LoginComponent.prototype.logout = function () {
        this.loginService.loginOut();
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-login',
            templateUrl: './login.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, login_service_1.LoginService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map