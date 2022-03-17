
class App{
    constructor(songslist) {
        this.songs = [];

        songslist.forEach(song => {
            const songfile = loadSound(song.file);
            const imgfile = loadImage(song.img);
            this.songs.push(new Archive(song.name, song.singer, songfile));
        })

        this.currentSong = this.songs[0];
        console.log(this.songs);
    }

    draw() {
        if(this.currentSong) this.currentSong.drawCurrent();
        this.songs.forEach((song, i) => {
            song.drawList(i);
        });
       /*  if(this.currentSong.file.isPlaying()) fill(255, 0, 0);
        else fill(0, 255, 0); */
        ellipse(20, 20, 20, 20);

        text("x: "+mouseX+"  y: " + mouseY, mouseX, mouseY);
    }

    click() {
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