class Product {
    constructor(name, price) {
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
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    discount(discountPercentage) {
        this.price = this.price * (1 - discountPercentage / 100);
    }
}
class Author {
    constructor(id, name) {
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
}
class Blog {
    constructor(id, author) {
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
}
class QueryBuilder {
}
class EmptyQueryBuilder extends QueryBuilder {
}
class SearchService {
    constructor({ qb = new EmptyQueryBuilder(), path }) {
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
}
class Room {
    constructor(name) {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class House {
    constructor(rooms) {
        Object.defineProperty(this, "rooms", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.rooms = rooms || []; // Initialize with empty array if not provided
    }
    addRoom(room) {
        this.rooms.push(room);
    }
    removeRoom(room) {
        // Implement logic to remove the room from the house
    }
    getRooms() {
        return this.rooms; // Return a copy to avoid modifying original array
    }
}
class SSHUser {
    constructor(privateKey, publicKey) {
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
    getBase64() {
        // Public method to access public data
        return Buffer.from(this.publicKey).toString("base64");
    }
}
export {};
