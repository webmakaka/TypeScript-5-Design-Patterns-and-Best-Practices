export class Song {
    constructor(public title: string, public artist: string, public duration: number) {}

    toString(): string {
        return `${this.title} by ${this.artist} (${this.duration} seconds)`;
    }
}
export interface Iterator<T> {
    hasNext(): boolean;
    next(): T | null;
}
export interface Playlist {
    createIterator(): Iterator<Song>;
}

export class PlaylistIterator implements Iterator<Song> {
    private currentIndex: number = 0;
    constructor(private playlist: Song[]) {}
    hasNext(): boolean {
        return this.currentIndex < this.playlist.length;
    }
    next(): Song | null {
        if (this.hasNext()) {
            return this.playlist[this.currentIndex++];
        }
        return null;
    }
}
export class MusicPlaylist implements Playlist {
    private songs: Song[] = [];
    addSong(song: Song): void {
        this.songs.push(song);
    }
    createIterator(): Iterator<Song> {
        return new PlaylistIterator(this.songs);
    }
}
const myPlaylist = new MusicPlaylist();
myPlaylist.addSong(new Song("Bohemian Rhapsody", "Queen", 354));
myPlaylist.addSong(new Song("Stairway to Heaven", "Led Zeppelin", 482));
myPlaylist.addSong(new Song("Imagine", "John Lennon", 183));
const iterator = myPlaylist.createIterator();
console.log("My Playlist:");
while (iterator.hasNext()) {
    const song = iterator.next();
    if (song) {
        console.log(song.toString());
    }
}