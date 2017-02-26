"use strict";
var Session = (function () {
    function Session() {
        this.state = false;
    }
    Session.prototype.isTrue = function () {
        return this.state;
    };
    return Session;
}());
exports.Session = Session;
//# sourceMappingURL=session.js.map