//en Archivo= se suben las canciones

    let song
    
        function setup() {
          song = loadSound('Downloads/Demasiadas Mujeres.mp4');
          createCanvas(720, 200);
          background(255, 0, 0);
        }
        
        function mousePressed() {
          if (song.isPlaying()) {
            // .isPlaying() retorna una variable booleana
            song.stop();
            background(255, 0, 0);
          } else {
            song.play();
            background(0, 255, 0);
          }
        }
    