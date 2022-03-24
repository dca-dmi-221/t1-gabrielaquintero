
class Archive{
    constructor(name,singer,file,img){
        this._name=name
        this._singer=singer
        this._file=file
        this._img=img
    }

    drawList(i) {
        text(this._name, 1585, 200 + (50 * i));
        image(this._img, 1535, 200 + (50 * i), 30, 30);
    }

    drawCurrent() {

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