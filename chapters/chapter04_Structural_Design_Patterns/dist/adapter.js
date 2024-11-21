"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reporter = exports.ImperialToMetricAdapter = exports.ImperialSystem = exports.MetricSystem = void 0;
var MetricSystem = /** @class */ (function () {
    function MetricSystem(distanceInMeters) {
        Object.defineProperty(this, "distanceInMeters", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.distanceInMeters = distanceInMeters;
    }
    Object.defineProperty(MetricSystem.prototype, "getDistanceInMeters", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.distanceInMeters;
        }
    });
    return MetricSystem;
}());
exports.MetricSystem = MetricSystem;
var ImperialSystem = /** @class */ (function () {
    function ImperialSystem(distanceInFeet) {
        Object.defineProperty(this, "distanceInFeet", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.distanceInFeet = distanceInFeet;
    }
    Object.defineProperty(ImperialSystem.prototype, "getDistanceInFeet", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.distanceInFeet;
        }
    });
    return ImperialSystem;
}());
exports.ImperialSystem = ImperialSystem;
var ImperialToMetricAdapter = /** @class */ (function () {
    function ImperialToMetricAdapter(imperialSystem) {
        Object.defineProperty(this, "imperialSystem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.imperialSystem = imperialSystem;
    }
    Object.defineProperty(ImperialToMetricAdapter.prototype, "getDistanceInMeters", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var feet = this.imperialSystem.getDistanceInFeet();
            if (typeof feet !== "number" || isNaN(feet)) {
                throw new Error("Invalid distance in feet provided");
            }
            return feet * 0.3048; // Convert feet to meters
        }
    });
    return ImperialToMetricAdapter;
}());
exports.ImperialToMetricAdapter = ImperialToMetricAdapter;
var Reporter = /** @class */ (function () {
    function Reporter() {
    }
    Object.defineProperty(Reporter, "reportDistance", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (calculator) {
            console.log("The distance is ".concat(calculator.getDistanceInMeters(), " meters."));
        }
    });
    return Reporter;
}());
exports.Reporter = Reporter;
var metricDistance = new MetricSystem(5);
Reporter.reportDistance(metricDistance);
var imperialDistance = new ImperialSystem(10);
var adapter = new ImperialToMetricAdapter(imperialDistance);
Reporter.reportDistance(adapter);
