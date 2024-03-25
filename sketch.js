let table;
let sweet, maknae, spiracle, cover, house;

function preload() {
  table = loadTable('listens.csv', 'csv', 'header');
  spiracle = loadImage('images/spiracle.jpg');
  sweet = loadImage('images/toosweet.png');
  maknae = loadImage('images/maknae.png');
  cover = loadImage('images/coverme.png');
  house = loadImage('images/house.jpg');
}

function setup() {
  createCanvas(800, 650);
  background(125, 156, 194);
  imageMode(CENTER)
  allMySongs();
}

function allMySongs() {
  let xPos = 30;
  let yPos = 50;
  for (x = 0; x < table.getRowCount(); x++) {
    let row = table.getRow(x);
    let countSpiracle = row.get("Spiracle");
    if (countSpiracle > 0) {
      for (y = 0; y < countSpiracle; y++) {
        image(spiracle, random(width), random(height), 80, 80);
      }
    }

    let countTooSweet = row.get("TooSweet");
    if (countTooSweet > 0) {
      for (y = 0; y < countTooSweet; y++) {
        image(sweet, random(width), random(height), 80, 80);
      }
    }

    let countCoverMe = row.get("CoverMe");
    if (countCoverMe > 0) {
      for (y = 0; y < countCoverMe; y++) {
        image(cover, random(800), random(650), 80, 80);
      }
    }


    let countHouse = row.get("AHouseinNebraska");
    if (countHouse > 0) {
      for (y = 0; y < countHouse; y++) {
        image(house, random(800), random(650), 80, 80);
        }
      }
    
      let countMaknae = row.get("MaknaeOnTop");
    if (countMaknae > 0) {
      for (y = 0; y < countMaknae; y++) {
        image(maknae, random(800), random(650), 80, 80);
        }
      }
    }
    }

function draw() {
}
