"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Room = /** @class */ (function () {
    function Room(name) {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = name;
    }
    Object.defineProperty(Room.prototype, "getName", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.name;
        }
    });
    return Room;
}());
var House = /** @class */ (function () {
    function House(rooms) {
        Object.defineProperty(this, "rooms", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.rooms = rooms || [];
    }
    Object.defineProperty(House.prototype, "addRoom", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (room) {
            this.rooms.push(room);
        }
    });
    Object.defineProperty(House.prototype, "removeRoom", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (room) { }
    });
    Object.defineProperty(House.prototype, "getRooms", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.rooms;
        }
    });
    return House;
}());
