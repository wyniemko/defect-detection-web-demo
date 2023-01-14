let classifier;
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/dIEbPSruU/';
let video;
let flippedVideo;
let label = "";

// Create table element to hold the defects
let table = document.createElement("table");
document.body.appendChild(table);

function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  flippedVideo = ml5.flipImage(video)
  classifyVideo();
}

function draw() {
  background(0);
  image(flippedVideo, 0, 0);
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);
}

function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  if (results[0].label === "stop") {
    noLoop();
    return;
  }

  if (results[0].label === "defects") {
    console.log("d");
    // Insert new row in the table
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    // Add text and timestamp to the cells
    cell1.innerHTML = "Defect";
    cell2.innerHTML = new Date().toString();
  }

  label = results[0].label;
  classifyVideo();
}