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
  createCanvas(400, 400);
  app = new App(charactsongs);
}

function draw() {
  background(220);
  app.draw();
}

function mousePressed () {
  app.click();
}
