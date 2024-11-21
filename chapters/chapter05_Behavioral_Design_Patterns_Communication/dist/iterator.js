"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicPlaylist = exports.PlaylistIterator = exports.Song = void 0;
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
