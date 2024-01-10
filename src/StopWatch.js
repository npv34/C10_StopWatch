"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StopWatch = /** @class */ (function () {
    function StopWatch() {
    }
    StopWatch.prototype.start = function () {
        this._startTime = Date.now();
    };
    StopWatch.prototype.stop = function () {
        this._endTime = Date.now();
    };
    StopWatch.prototype.getElapsedTime = function () {
        return this._endTime - this._startTime;
    };
    return StopWatch;
}());
exports.default = StopWatch;
