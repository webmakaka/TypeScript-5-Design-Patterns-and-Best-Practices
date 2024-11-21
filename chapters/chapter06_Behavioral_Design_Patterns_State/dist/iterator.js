"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicPlaylist = exports.PlaylistIterator = exports.Song = void 0;
var tslib_1 = require("tslib");
var Song = /** @class */ (function () {
    function Song(title, artist, duration) {
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: title
        });
        Object.defineProperty(this, "artist", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: artist
        });
        Object.defineProperty(this, "duration", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: duration
        });
    }
    Object.defineProperty(Song.prototype, "toString", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return "".concat(this.title, " by ").concat(this.artist, " (").concat(this.duration, " seconds)");
        }
    });
    return Song;
}());
exports.Song = Song;
var PlaylistIterator = /** @class */ (function () {
    function PlaylistIterator(playlist) {
        Object.defineProperty(this, "playlist", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: playlist
        });
        Object.defineProperty(this, "currentIndex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
    }
    Object.defineProperty(PlaylistIterator.prototype, "hasNext", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.currentIndex < this.playlist.length;
        }
    });
    Object.defineProperty(PlaylistIterator.prototype, "next", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            if (this.hasNext()) {
                return this.playlist[this.currentIndex++];
            }
            return null;
        }
    });
    return PlaylistIterator;
}());
exports.PlaylistIterator = PlaylistIterator;
var MusicPlaylist = /** @class */ (function () {
    function MusicPlaylist() {
        Object.defineProperty(this, "songs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
    Object.defineProperty(MusicPlaylist.prototype, "addSong", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (song) {
            this.songs.push(song);
        }
    });
    Object.defineProperty(MusicPlaylist.prototype, "createIterator", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return new PlaylistIterator(this.songs);
        }
    });
    return MusicPlaylist;
}());
exports.MusicPlaylist = MusicPlaylist;
var myPlaylist = new MusicPlaylist();
myPlaylist.addSong(new Song("Bohemian Rhapsody", "Queen", 354));
myPlaylist.addSong(new Song("Stairway to Heaven", "Led Zeppelin", 482));
myPlaylist.addSong(new Song("Imagine", "John Lennon", 183));
var iterator = myPlaylist.createIterator();
console.log("My Playlist:");
while (iterator.hasNext()) {
    var song = iterator.next();
    if (song) {
        console.log(song.toString());
    }
}
var AsyncSongIterator = /** @class */ (function () {
    function AsyncSongIterator() {
        Object.defineProperty(this, "currentIndex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "songs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
    // Async method to simulate fetching songs from an API
    Object.defineProperty(AsyncSongIterator.prototype, "fetchSongs", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, ["Song 1", "Song 2", "Song 3"]];
                    }
                });
            });
        }
    });
    Object.defineProperty(AsyncSongIterator.prototype, "next", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!(this.currentIndex === 0)) return [3 /*break*/, 2];
                            _a = this;
                            return [4 /*yield*/, this.fetchSongs()];
                        case 1:
                            _a.songs = _b.sent();
                            _b.label = 2;
                        case 2:
                            if (this.currentIndex < this.songs.length) {
                                return [2 /*return*/, { value: this.songs[this.currentIndex++], done: false }];
                            }
                            else {
                                return [2 /*return*/, { value: null, done: true }];
                            }
                            return [2 /*return*/];
                    }
                });
            });
        }
    });
    Object.defineProperty(AsyncSongIterator.prototype, Symbol.asyncIterator, {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this;
        }
    });
    return AsyncSongIterator;
}());
// Example usage of the async iterator
;
(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var songIterator, _a, songIterator_1, songIterator_1_1, song, e_1_1;
    var _b, e_1, _c, _d;
    return tslib_1.__generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                songIterator = new AsyncSongIterator();
                _e.label = 1;
            case 1:
                _e.trys.push([1, 6, 7, 12]);
                _a = true, songIterator_1 = tslib_1.__asyncValues(songIterator);
                _e.label = 2;
            case 2: return [4 /*yield*/, songIterator_1.next()];
            case 3:
                if (!(songIterator_1_1 = _e.sent(), _b = songIterator_1_1.done, !_b)) return [3 /*break*/, 5];
                _d = songIterator_1_1.value;
                _a = false;
                song = _d;
                console.log(song); // Logs each song after a delay
                _e.label = 4;
            case 4:
                _a = true;
                return [3 /*break*/, 2];
            case 5: return [3 /*break*/, 12];
            case 6:
                e_1_1 = _e.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 12];
            case 7:
                _e.trys.push([7, , 10, 11]);
                if (!(!_a && !_b && (_c = songIterator_1.return))) return [3 /*break*/, 9];
                return [4 /*yield*/, _c.call(songIterator_1)];
            case 8:
                _e.sent();
                _e.label = 9;
            case 9: return [3 /*break*/, 11];
            case 10:
                if (e_1) throw e_1.error;
                return [7 /*endfinally*/];
            case 11: return [7 /*endfinally*/];
            case 12: return [2 /*return*/];
        }
    });
}); })();
