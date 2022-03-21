function preload(){
fondo=loadImage(('img/fondo.jpg'))

}



const charactsongs = [
/*   {
      name: "nombre artista",
      singer: "cantante",
      file: "/songs/loquesea.mp3",
      img: "/images/loasdjasdil.jpg"
  },
  {
      name: "nombre artista2",
      singer: "cantante2",
      file: "/songs/loquesea2.mp3"
  } */
];
let app;

function setup() {
  createCanvas(1960, 1055);
  app = new App(charactsongs);
}

function draw() {
  background(220);
  image(fondo, 0,0,1960,1055)
  app.draw();
}

function mousePressed () {
  app.click();
}
