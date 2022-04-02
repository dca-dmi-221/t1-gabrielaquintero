//en PlayList= se hacen todas las listas de reproduccion
class playList{
    constructor(songs, name) {
        this._songs = songs;
        this._name = name;
        this._currentSong = null;
        this._currSong = null;
        this._isPlay = false;
    }

    drawSongs() {
        this._songs.forEach((song, i) => {
            song.drawList(i);
        });
    }

    drawCurrent(){
        if(this._currSong != null){
            this._currSong.drawCurrent()
        }

    }

  

    clickSongs(i,callback) {
        if(this.isHover(i)) {
            this._currentSong.stop()
            this._currentSong+=1;
            this._currentSong.play();
            
            //currSong.onended(() => this._currentSong++);
                //callback();
                console.log("funciona")
    }

}
    /*showCurrentSong(){
        for (let index = 0; index < this._songs.length; index++) {
            const element = songs[index];
            
        }
    }*/

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
            this._currentSong = 0;
            this._currSong = this._songs[this._currentSong];
            console.log(this._currSong)
            this._currSong.play();
            this._isPlay = true;
            //console.log(this.currtSong.currentTime())
            //currSong.onended(() => this._currentSong++);

        }
    }

   

    stopPlaying() {
        if(this._currentSong !== null)this._songs[this._currentSong].stop();
        this._isPlay = false;
    }
    

    pauseSong(){
        this._songs[this._currentSong].pause();
        this._isPlay = false;
    }

    playSong(){
        this._currSong.play();
        this._isPlay = true;
    }
    
    isHover(i) {
        return (mouseX > 40 && mouseX < 420 && mouseY > 180 + (70 * i) && mouseY < 205 + (70 * i));
    }
  

setPlay(p) {
this._isPlay = p
}

get currentSong(){
    return this._currentSong
}

get currtSong(){
    return this._currSong
}

get isPlay(){
   
    return this._isPlay
}



}