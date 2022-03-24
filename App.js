
class App{
    constructor(songslist, songFiles) {
        const songs = [];
        this._playLists = [];

        songslist.forEach((song, index) => {
            songs.push(new Archive(song.name, song.singer, songFiles[index].song, songFiles[index].img));
        })

        this._playLists.push(new playList(songs, "Todas las canciones"));
        this._playLists.push(new playList([songs[0], songs[1], songs[2]], "Primeras 3"));
        this._playLists.push(new playList(songs, "Todas las canciones"));
        this._playLists.push(new playList(songs, "Todas las canciones"));

        this._currentPlaylist = 0;
        console.log(this.songs);
    }

    draw() {
        
        this._playLists[this._currentPlaylist].drawSongs();
        
        this._playLists.forEach((playlist, i) => {
            playlist.drawList(i);
        });

       /*  if(this.currentSong.file.isPlaying()) fill(255, 0, 0);
        else fill(0, 255, 0); */
        ellipse(20, 20, 20, 20);

        text("x: "+mouseX+"  y: " + mouseY, mouseX, mouseY);
    }

    click() {
        this._playLists.forEach((playlist, index) => {
            playlist.clickPlaylist(index, () => this._currentPlaylist = index)
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