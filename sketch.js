const charactsongs = [
  {
    name: "Cant back down",
    singer: "Demi Lovato, Alyson Stoner, Ana Maria Perez",
    file: "/songs/cant back down.mp3",
    img: "img/nota musical.jpg"
  },
   {
    name: "fire",
    singer: "Matthew Finley",
    file: "/songs/fire.mp3",
    img: "img/nota musical.jpg"
  }, 
  {
    name: "Gotta find you",
    singer: "Joe Jonas",
    file: "/songs/gotta find you.mp3",
    img: "img/nota musical.jpg"
  },
  {
    name: "Introducing me",
    singer: "Nick Jonas",
    file: "/songs/introducing me.mp3",
    img: "img/nota musical.jpg"
  },
  {
    name: "Play my music",
    singer: "Jonas Brothers",
    file: "/songs/play my music.mp3",
    img: "img/nota musical.jpg"
  },
  {
    name: "Start the party",
    singer: "Jordan Francis",
    file: "/songs/start de party.mp3",
    img: "img/nota musical.jpg"
  },
  {
    name: "This is me ",
    singer: "Demi Lovato, Joe Jonas",
    file: "/songs/this is me.mp3",
    img: "img/nota musical.jpg"
  },
  {
    name: "This is our song ",
    singer: "Demi Lovato, Joe Jonas, Nick Jonas, Alyson Stoner",
    file: "/songs/this is our song.mp3",
    img: "img/nota musical.jpg"
  },
  {
    name: "We rock ",
    singer: "Cast of Camp Rock",
    file: "/songs/we rock.mp3",
    img: "img/nota musical.jpg"
  },
  {
    name: "What we came here",
    singer: "Demi Lovato, Joe Jonas, Nick Jonas, Alyson Stoner",
    file: "/songs/what we came here.mp3",
    img: "img/nota musical.jpg"
  },
];
let songFiles = [];
let app;

function preload(){
  fondo=loadImage(('img/fondo.jpg'));
  songFiles = charactsongs.map(({file, img}) => {
    return {
      song: loadSound(file),
      img: loadImage(img)
    }
  });
}

function setup() {
  createCanvas(1960, 1055);
  app = new App(charactsongs, songFiles);
}

function draw() {
  background(220);
  image(fondo, 0,0,1960,1055)
  app.draw();
}

function mousePressed () {
  app.click();
}
