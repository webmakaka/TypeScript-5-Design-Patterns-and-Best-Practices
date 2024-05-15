"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Product = /** @class */ (function () {
    function Product(name, price) {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: name
        });
        Object.defineProperty(this, "price", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: price
        });
        this.name = name;
        this.price = price;
    }
    Object.defineProperty(Product.prototype, "getName", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.name;
        }
    });
    Object.defineProperty(Product.prototype, "getPrice", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.price;
        }
    });
    Object.defineProperty(Product.prototype, "discount", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (discountPercentage) {
            this.price = this.price * (1 - discountPercentage / 100);
        }
    });
    return Product;
}());
var Author = /** @class */ (function () {
    function Author(id, name) {
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.id = id;
        this.name = name;
    }
    return Author;
}());
var Blog = /** @class */ (function () {
    function Blog(id, author) {
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "author", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.id = id;
        this.author = author;
    }
    return Blog;
}());
var QueryBuilder = /** @class */ (function () {
    function QueryBuilder() {
    }
    return QueryBuilder;
}());
var EmptyQueryBuilder = /** @class */ (function (_super) {
    tslib_1.__extends(EmptyQueryBuilder, _super);
    function EmptyQueryBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EmptyQueryBuilder;
}(QueryBuilder));
var SearchService = /** @class */ (function () {
    function SearchService(_a) {
        var _b = _a.qb, qb = _b === void 0 ? new EmptyQueryBuilder() : _b, path = _a.path;
        Object.defineProperty(this, "queryBuilder", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "path", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.queryBuilder = qb;
        this.path = path;
    }
    return SearchService;
}());
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
        this.rooms = rooms || []; // Initialize with empty array if not provided
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
        value: function (room) {
            // Implement logic to remove the room from the house
        }
    });
    Object.defineProperty(House.prototype, "getRooms", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.rooms; // Return a copy to avoid modifying original array
        }
    });
    return House;
}());
var SSHUser = /** @class */ (function () {
    function SSHUser(privateKey, publicKey) {
        Object.defineProperty(this, "privateKey", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: privateKey
        });
        Object.defineProperty(this, "publicKey", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: publicKey
        });
        this.privateKey = privateKey;
        this.publicKey = publicKey;
    }
    Object.defineProperty(SSHUser.prototype, "getBase64", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            // Public method to access public data
            return Buffer.from(this.publicKey).toString("base64");
        }
    });
    return SSHUser;
}());
