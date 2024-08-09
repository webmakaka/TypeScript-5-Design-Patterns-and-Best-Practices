"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TropicalPlantCare = exports.MistSprayer = exports.SmartPlantCare = void 0;
var tslib_1 = require("tslib");
var SmartPlantCare = /** @class */ (function () {
    function SmartPlantCare(mechanism, moistureThreshold) {
        Object.defineProperty(this, "mechanism", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "moistureThreshold", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.mechanism = mechanism;
        this.moistureThreshold = moistureThreshold;
    }
    return SmartPlantCare;
}());
exports.SmartPlantCare = SmartPlantCare;
var MistSprayer = /** @class */ (function () {
    function MistSprayer() {
        Object.defineProperty(this, "waterReservoir", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 500
        }); // ml
    }
    Object.defineProperty(MistSprayer.prototype, "water", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (amount) {
            this.waterReservoir -= amount;
            console.log("Misting ".concat(amount, "ml of water"));
        }
    });
    Object.defineProperty(MistSprayer.prototype, "checkWaterLevel", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.waterReservoir;
        }
    });
    Object.defineProperty(MistSprayer.prototype, "refill", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (amount) {
            this.waterReservoir += amount;
            console.log("Refilled misting system with ".concat(amount, "ml of water"));
        }
    });
    return MistSprayer;
}());
exports.MistSprayer = MistSprayer;
var TropicalPlantCare = /** @class */ (function (_super) {
    tslib_1.__extends(TropicalPlantCare, _super);
    function TropicalPlantCare(mechanism) {
        return _super.call(this, mechanism, 60) || this; // Tropical plants prefer moist soil
    }
    Object.defineProperty(TropicalPlantCare.prototype, "waterPlant", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (currentMoisture) {
            if (currentMoisture < this.moistureThreshold) {
                this.mechanism.water(100);
            }
            else {
                console.log("Tropical plant doesn't need watering");
            }
        }
    });
    Object.defineProperty(TropicalPlantCare.prototype, "adjustWatering", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (weatherForecast) {
            if (weatherForecast.includes("humidity")) {
                this.moistureThreshold += 10;
                console.log("Adjusted watering for humid weather");
            }
            else if (weatherForecast.includes("dry")) {
                this.moistureThreshold -= 10;
                console.log("Adjusted watering for dry weather");
            }
        }
    });
    return TropicalPlantCare;
}(SmartPlantCare));
exports.TropicalPlantCare = TropicalPlantCare;
