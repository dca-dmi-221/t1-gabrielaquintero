
class Archive{
    constructor(name,singer,file,img){
        this._name=name
        this._singer=singer
        this._file=file
        this._img=img
    }

    drawList(i) {
        textSize(20)
        text(this._name, 1585, 220 + (70 * i));
        image(this._img, 1515, 200 + (70 * i), 50, 50);
        //fontSize(10)
        textSize(15)
        text(this._singer,1585,240+(70*i))
    }

    /*drawSongs(i){
        text(this._name, 905, 220 + (70 * i));
        image(this._img, 761, 473 + (70 * i), 50, 50);
        text(this._singer,1585,240+(70*i))
    }*/

    

    drawCurrent(i) {
        text(this._name, 825, 699)
        image(this._img, 774, 666)
        text(this._singer,830,699)

    }
    
    clickSong(i, callback) {
        if(this.isHover(i)) {
            callback();
            console.log("funciona")
        }
        
    }

    isHover(i) {
        return (mouseX > 1514 && mouseX < 1823 && mouseY > 198 + (70 * i) && mouseY < 252 + (70 * i));
    }
   
    

    play() {
        this._file.play();
    }
    duration() {
        this._file.pause();
    }

    get name() {
        return this._name;
    }
    get singer() {
        return this._singer;
    }
    get file() {
        return this._file;
    }
    get img() {
        return this._img;
    }
}