// Classifier Variable
let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/dIEbPSruU/';

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";

// Keep track of elapsed time and classification results
let elapsedTime = 0;
let classificationResults = [];

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

  // Increment the elapsed time
  elapsedTime++;

  // Stop the program after 30 seconds
  if (elapsedTime > 30 * 60) {
    noLoop();
  }
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
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

  // Store the classification results
  classificationResults.push(results[0]);
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  // Classify again!
  classifyVideo();
}


