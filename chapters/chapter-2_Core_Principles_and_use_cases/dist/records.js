"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stats(data) {
    var stats = {};
    data.forEach(function (item) {
        var name = item.name;
        stats[name] = { free: item.totalFree, used: item.totalUsed, size: item.totalSize };
    });
    return stats;
}
