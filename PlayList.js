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


    showCurrentSong(){
        for (let index = 0; index < this._songs.length; index++) {
            const element = songs[index];
            
        }
    }

    drawList(i) {
        if(this.isHover(i)) {
            stroke(0);
            noFill();
            rect(40, 185 + (70 * i), 380, 25);
            noStroke();
            fill(0);
        }
        textSize(20)
        text(this._name, 60, 200 + (70 * i));
        
    }

    clickPlaylist(i, callback) {
        if(this.isHover(i)) {
            callback();
            console.log("funciona")
        }
    }

    isHover(i) {
        return (mouseX > 40 && mouseX < 420 && mouseY > 180 + (70 * i) && mouseY < 205 + (70 * i));
    }


    
}