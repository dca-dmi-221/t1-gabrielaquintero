//en PlayList= se hacen todas las listas de reproduccion
class playList{
    constructor(songs, name) {
        this._songs = songs;
        this._name = name;
    }

    drawSongs() {
        this._songs.forEach((song, i) => {
            song.drawList(i);
        });
    }

    drawList(i) {
        if(this.isHover(i)) {
            stroke(0);
            noFill();
            rect(40, 180 + (50 * i), 380, 25);
            noStroke();
            fill(0);
        }
        text(this._name, 50, 200 + (50 * i));
    }

    clickPlaylist(i, callback) {
        if(this.isHover(i)) {
            callback();
        }
    }

    isHover(i) {
        return (mouseX > 40 && mouseX < 420 && mouseY > 180 + (50 * i) && mouseY < 205 + (50 * i));
    }
}