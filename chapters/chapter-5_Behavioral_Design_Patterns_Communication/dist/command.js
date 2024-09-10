"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartHomeController = exports.TurnOffLightCommand = exports.TurnOnLightCommand = exports.Light = void 0;
// Receiver: Smart Home Device
var Light = /** @class */ (function () {
    function Light() {
    }
    Object.defineProperty(Light.prototype, "turnOn", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            console.log("Light is turned on");
        }
    });
    Object.defineProperty(Light.prototype, "turnOff", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            console.log("Light is turned off");
        }
    });
    return Light;
}());
exports.Light = Light;
var TurnOnLightCommand = /** @class */ (function () {
    function TurnOnLightCommand(light) {
        Object.defineProperty(this, "light", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: light
        });
    }
    Object.defineProperty(TurnOnLightCommand.prototype, "execute", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            this.light.turnOn();
        }
    });
    return TurnOnLightCommand;
}());
exports.TurnOnLightCommand = TurnOnLightCommand;
var TurnOffLightCommand = /** @class */ (function () {
    function TurnOffLightCommand(light) {
        Object.defineProperty(this, "light", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: light
        });
    }
    Object.defineProperty(TurnOffLightCommand.prototype, "execute", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            this.light.turnOff();
        }
    });
    return TurnOffLightCommand;
}());
exports.TurnOffLightCommand = TurnOffLightCommand;
var SmartHomeController = /** @class */ (function () {
    function SmartHomeController() {
        Object.defineProperty(this, "commands", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
    Object.defineProperty(SmartHomeController.prototype, "addCommand", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (command) {
            this.commands.push(command);
        }
    });
    Object.defineProperty(SmartHomeController.prototype, "executeCommands", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            this.commands.forEach(function (command) { return command.execute(); });
            this.commands = [];
        }
    });
    return SmartHomeController;
}());
exports.SmartHomeController = SmartHomeController;
var light = new Light();
var controller = new SmartHomeController();
controller.addCommand(new TurnOnLightCommand(light));
controller.addCommand(new TurnOffLightCommand(light));
controller.executeCommands();
