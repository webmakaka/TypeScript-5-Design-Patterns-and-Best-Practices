"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
class User {
    constructor(name, email, password) {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: name
        });
        Object.defineProperty(this, "email", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: email
        });
        Object.defineProperty(this, "password", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: password
        });
    }
    login(email, password) { }
    sendEmail(email, template) { }
    generateSlug() {
        return (0, lodash_1.kebabCase)(this.name);
    }
}
class UserAccountService {
    login(user, password) { }
}
class EmailService {
    sendEmailToUser(user, template) { }
}
class User2 {
    constructor(name, email, password, accountType = "Normal") {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: name
        });
        Object.defineProperty(this, "email", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: email
        });
        Object.defineProperty(this, "password", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: password
        });
        Object.defineProperty(this, "accountType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: accountType
        });
    }
    isPremium() {
        return this.accountType === "Premium";
    }
    isUltimate() {
        return this.accountType === "Ultimate";
    }
}
class VoucherService {
    getVoucher(user) {
        if (user.isPremium()) {
            return "15% discount";
        }
        else {
            return "10% discount";
        }
    }
}
const userTypeToVoucherMap = {
    Normal: "10% discount",
    Premium: "15% discount",
    Ultimate: "20% discount",
};
class Stack {
    constructor(items = []) {
        Object.defineProperty(this, "items", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: items
        });
    }
    push(item) { }
    pop() {
        if (this.items.length > 0) {
            return this.items.pop();
        }
        return undefined;
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
class NonEmptyStack {
    constructor(items = []) {
        Object.defineProperty(this, "items", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: items
        });
        Object.defineProperty(this, "tag", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: Symbol()
        });
        if (this.items.length == 0) {
            this.items.push(this.tag);
        }
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        if (this.items.length === 1) {
            const item = this.items.pop();
            this.items.push(this.tag);
            return item;
        }
        if (this.items.length > 1) {
            return this.items.pop();
        }
        return undefined;
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
class UserService {
    constructor() { }
    findByEmail(email) {
        const userRepo = UserRepositoryFactory.getInstance();
        return userRepo.findByEmail(email);
    }
}
class UserRepositoryFactory {
    static getInstance() {
        return new UserRepository();
    }
}
class UserRepository {
    constructor() {
        Object.defineProperty(this, "users", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: [{ name: "Theo", email: "theo@example.com" }]
        });
    }
    findByEmail(email) {
        const user = this.users.find((u) => u.email === email);
        return user;
    }
}
