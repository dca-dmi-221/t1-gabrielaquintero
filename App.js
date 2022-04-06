
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
        this._currentSong=0
        this.isPlaying = false;
        console.log(this.songs)
    }

    draw() {
        
        this._playLists[this._currentPlaylist].drawSongs();
        
        this._playLists.forEach((playlist, i) => {
            playlist.drawList(i);
        });

        this._playLists[this._currentPlaylist].drawCurrent();
        //console.log(this._playLists[this._currentPlaylist])

        /*let s =this._playLists[this._currentPlaylist]
        if (s != null){
            s.nextSong()
        }
       
        
        /*this.songs.forEach((song, index) => {
            song.clickSong(index,()=>this._currentSong=index)
            song.drawCurrent(this.songs[this._currentSong]);
            
        });*/

       /*  if(this.currentSong.file.isPlaying()) fill(255, 0, 0);
        else fill(0, 255, 0); */
        

        text("x: "+mouseX+"  y: " + mouseY, mouseX, mouseY);
    }

    click() {

        //AQUI ES LLAMANDO LA FUNCION DE SIGUIENTE CANCION QUE NO PUDE HACER 
        /*if(dist(1100, 922, mouseX, mouseY) <= 50) {
           // console.log([this._currentPlaylist].length, '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
            //nextSong(this._playLists, this._currentPlaylist, this._playLists[this._currentPlaylist].currtSong);  

            this._playLists[0].setCurrentSong(2)
            console.log(this._playLists[0]);
            console.log([this._currentPlaylist], this._playLists[this._currentPlaylist].currtSong);
        }*/ 


        this._playLists.forEach((playlist, index) => {
            playlist.clickPlaylist(index, () => {
                this._playLists[this._currentPlaylist].stopPlaying()
                this._currentPlaylist = index;
            })
        })
        this._playLists[this._currentPlaylist].clickSongs();
        
        if(dist(962, 922, mouseX, mouseY) <= 30) {
           
            let song = this._playLists[this._currentPlaylist].isPlay;
            let s =this._playLists[this._currentPlaylist].currtSong;
            console.log(s.file)
            let b = this._playLists[this._currentPlaylist];
            this.isPlaying = song;
            console.log(this.isPlaying)
           

            if(this.isPlaying === true) {
                console.log(s,"hola");
                s.file.pause();
                let r = false;
                b.setPlay(false);
                console.log("Pause");
                console.log(r)
                console.log(this._playLists[this._currentPlaylist].isPlay)
            } else {
                this._playLists[this._currentPlaylist].playSong();
                console.log("Play");
                b.setPlay (true);
    }

        
    }
}


    get currtPlaylist(){
        return this._currentPlaylist
    }
}
//PROFE TODO ESTO FUE TRATANDO DE HACER LO DE SIGUIENTE CANCION PERO NO ME FUNCIONA
/*function nextSong(playlistArray, playlist, cancion){
    console.log(playlistArray, playlist, cancion);
    let currentIndex = playlistArray[playlist]._songs.findIndex(song => song.nombre === cancion.nombre);
    console.log(currentIndex, '<<<<<<<<<<<<<<<<<<<<<<<<<');
    if (playlist == 0){
        console.log("si funciona");
        cancion.stop();
        console.log(playlistArray[playlist].currentSong.file, 'hhhhhhhhh');
        currentIndex ++;
        
        //console.log(playlistArray[playlist]._songs[currentInde x], '-------------------------');
        //playlistArray[playlist].changeCurrentSong = 2
        //console.log(playlistArray[playlist].currentSong.file, 'hhhhhhhhh');
        playlistArray[playlist].currentSong.file.play() 
        //playlist[currentIndex].file.play();
       //sole.log(playlist[currentIndex], currentIndex, playlist.length, 'cancionnnn');
        if(currentIndex < playlist.lenght-1) {
        } else {
            currentIndex = 0;
        }

        //cancion.play();

       // console.log(this._playLists[0].this.songs[0]);
    }
}*/


