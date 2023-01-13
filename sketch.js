let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/dIEbPSruU/';

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  createCanvas(640, 480);
  // Create the video
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  flippedVideo = ml5.flipImage(video)
  // Start classifying
  classifyVideo();
}

function draw() {
  background(0);
  // Draw the video
  image(flippedVideo, 0, 0);

  // Draw the label
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
}

function createTable(results) {
  let table = "<table>";
  table += "<tr><th>Mode</th><th>Confidence</th></tr>";
  for (let i = 0; i < results.length; i++) {
    // Use toFixed to shorten the confidence value to 2 decimal places
    table += "<tr><td>" + results[i].label + "</td><td>" + results[i].confidence.toFixed(4) + "</td></tr>";
  }
  table += "</table>";
  return table;
}

function printResults(results) {
  let table = createTable(results);
  let tableContainer = document.getElementById("table-container");
  tableContainer.innerHTML = table;
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }

  // Check the label of the classification results
  if (results[0].label === "stop") {
    // Stop the program if the label is "stop"
    noLoop();
    return;
  }

    // If the label is "defects", print the results
  if (results[0].label === "defects") {
    printResults(results);
  }

  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  // Classify again!
  classifyVideo();
}
