"use strict";
var Session = (function () {
    function Session(username) {
        this.state = false;
        this.userName = username;
    }
    Session.prototype.isTrue = function () {
        return this.state;
    };
    Session.prototype.setUserName = function (username) {
        this.userName = username;
    };
    Session.prototype.getUserName = function () {
        return this.userName;
    };
    Session.prototype.setState = function (state) {
        this.state = state;
    };
    Session.prototype.getState = function () {
        return this.state;
    };
    return Session;
}());
exports.Session = Session;
//# sourceMappingURL=session.js.map