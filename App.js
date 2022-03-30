
class App{
    constructor(songslist, songFiles) {
        this.songs = [];
        this._playLists = [];

        songslist.forEach((song, index) => {
            this.songs.push(new Archive(song.name, song.singer, songFiles[index].song, songFiles[index].img));
        })

        this._playLists.push(new playList(this.songs, "Todas las canciones"));
        this._playLists.push(new playList([this.songs[0], this.songs[1], this.songs[2],this.songs[3],this.songs[4]], "Camp Rock 1"));
        this._playLists.push(new playList([this.songs[5], this.songs[6], this.songs[7],this.songs[8],this.songs[9]], "Camp Rock 2"));
        this._playLists.push(new playList([this.songs[2], this.songs[3], this.songs[6]], "Amor"));

        this._currentPlaylist = 0;
        //this._currentSong=0
        console.log(this.songs);
    }

    draw() {
        
        this._playLists[this._currentPlaylist].drawSongs();
        
        this._playLists.forEach((playlist, i) => {
            playlist.drawList(i);
        });
        this.songs.forEach((song, index) => {
            song.clickSong(index,()=>this._currentSong=index)
            song.drawCurrent(this.songs[this._currentSong]);
            
        });

       /*  if(this.currentSong.file.isPlaying()) fill(255, 0, 0);
        else fill(0, 255, 0); */
        

        text("x: "+mouseX+"  y: " + mouseY, mouseX, mouseY);
    }
    

    click() {
        this._playLists.forEach((playlist, index) => {
            playlist.clickPlaylist(index, () => this._currentPlaylist = index)
        })
        this.songs.forEach((song,index)=>{
            song.clickSong(index,()=>this._currentSong=index)
            //console.log();
            console.log(this.songs[this._currentSong])
        })
        if(dist(20, 20, mouseX, mouseY) <= 10) {
            if(this.currentSong.file.isPlaying()) {
                this.currentSong.pause();
                console.log("Pause");
            } else {
                this.currentSong.play();
                console.log("Play");

            }
        }
    }
/* 
    pause()
    next()
    previous()
    changeOrder()
    stop()
    shuffle() */

























}