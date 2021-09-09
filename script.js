// globale variabelen
var x = 50;
var y = 50;
var speedX = 2;
var speedY = 5;

var x2 = 150;
var y2 = 50;
var speedX2 = 10;
var speedY2 = 5;

var x3 = 250;
var y3 = 50;
var speedX3 = 10;
var speedY3 = 2;


var x4 = 350;
var y4 = 50;
var speedX4 = 2;
var speedY4 = 10;


var x5 = 450;
var y5 = 50;
var speedX5 = 10;
var speedY5 = 10;

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');

  //bal 1



  
  // stel vulkleur in
  fill(255, 255, 255);

  // teken een cirkel
  ellipse(x, y, 80, 80);

  //positie updaten
  x = x + speedX;
  y = y + speedY;

  // laat stuiteren tegen de onderkant
  if (y === 720) {
    speedY = speedY * -1;
  }

  // laat stuiteren tegen de bovenkang
  if (y === 0) {
    speedY = speedY * -1;
  }

  // laat stuiteren tegen de linker zijkant
  if (x === 0) {
    speedX = speedX * -1;
  }

  // laat stuiteren tegen de rechter zijkant
  if (x === 1280) {
    speedX = speedX * -1;
  }

    //bal 2


  
  
  // stel vulkleur in
  fill(255, 255, 255);

  // teken een cirkel
  ellipse(x2, y2, 80, 80);

  //positie updaten
  x2 = x2 + speedX2;
  y2 = y2 + speedY2;

  // laat stuiteren tegen de onderkant
  if (y2 === 720) {
    speedY2 = speedY2 * -1;
  }

  // laat stuiteren tegen de bovenkang
  if (y2 === 0) {
    speedY2 = speedY2 * -1;
  }

  // laat stuiteren tegen de linker zijkant
  if (x2 === 0) {
    speedX2 = speedX2 * -1;
  }

  // laat stuiteren tegen de rechter zijkant
  if (x2 === 1280) {
    speedX2 = speedX2 * -1;
  }


    //bal 3


  
  
  // stel vulkleur in
  fill(255, 255, 255);

  // teken een cirkel
  ellipse(x3, y3, 80, 80);

  //positie updaten
  x3 = x3 + speedX3;
  y3 = y3 + speedY3;

  // laat stuiteren tegen de onderkant
  if (y3 === 720) {
    speedY3 = speedY3 * -1;
  }

  // laat stuiteren tegen de bovenkang
  if (y3 === 0) {
    speedY3 = speedY3 * -1;
  }

  // laat stuiteren tegen de linker zijkant
  if (x3 === 0) {
    speedX3 = speedX3 * -1;
  }

  // laat stuiteren tegen de rechter zijkant
  if (x3 === 1280) {
    speedX3 = speedX3 * -1;
  }


    //bal 4


  
  
  // stel vulkleur in
  fill(255, 255, 255);

  // teken een cirkel
  ellipse(x4, y4, 80, 80);

  //positie updaten
  x4 = x4 + speedX4;
  y4 = y4 + speedY4;

  // laat stuiteren tegen de onderkant
  if (y4 === 720) {
    speedY4 = speedY4 * -1;
  }

  // laat stuiteren tegen de bovenkang
  if (y4 === 0) {
    speedY4 = speedY4 * -1;
  }

  // laat stuiteren tegen de linker zijkant
  if (x4 === 0) {
    speedX4 = speedX4 * -1;
  }

  // laat stuiteren tegen de rechter zijkant
  if (x4 === 1280) {
    speedX4 = speedX4 * -1;
  }



    //bal 5


  
  
  // stel vulkleur in
  fill(255, 255, 255);

  // teken een cirkel
  ellipse(x5, y5, 80, 80);

  //positie updaten
  x5 = x5 + speedX;
  y5 = y5 + speedY;

  // laat stuiteren tegen de onderkant
  if (y5 === 720) {
    speedY5 = speedY5 * -1;
  }

  // laat stuiteren tegen de bovenkang
  if (y5 === 0) {
    speedY5 = speedY5 * -1;
  }

  // laat stuiteren tegen de linker zijkant
  if (x5 === 0) {
    speedX5 = speedX5 * -1;
  }

  // laat stuiteren tegen de rechter zijkant
  if (x5 === 1280) {
    speedX5 = speedX5 * -1;
  }
}