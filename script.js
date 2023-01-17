// Kung Fu Panada Character Search by Ishani Munasinghe

// Variables for HTML Elements
let markBtnEl = document.getElementById("mark-btn");
let question1El = document.getElementById("Q1");
let question2El = document.getElementById("Q2");
let question3El = document.getElementById("Q3");
let question4El = document.getElementById("Q4");
let question5El = document.getElementById("Q5");

let q1MarkEl = document.getElementById("q1-mark");
let q2MarkEl = document.getElementById("q2-mark");
let q3MarkEl = document.getElementById("q3-mark");
let q4MarkEl = document.getElementById("q4-mark");
let q5MarkEl = document.getElementById("q5-mark");

let resultEl = document.getElementById("results");
let feedbackEl = document.getElementById("feedback");
let percentageEl = document.getElementById("percentage");

// Add Event Listener to Button
markBtnEl.addEventListener("click", markQuiz);

// Event Function
function markQuiz() {
  // Reset score
  var score = 0;

  // Get Input
  let q1_input = question1El.value.toLowerCase();
  let q2_input = +question2El.value;
  let q3_input = +question3El.value;
  let q4_input = question4El.value.toLowerCase();
  let q5_input = question5El.value;

  // Check answers
  if (
    q1_input === "waddle" ||
    q1_input === "rookery" ||
    q1_input === "colony" ||
    q1_input === "huddle"
  ) {
    score = score + 1;
    question1El.style.color = "white";
    question1El.style.backgroundColor = "green";
    q1MarkEl.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Green-checkmark.svg/1957px-Green-checkmark.svg.png";
  } else {
    question1El.style.color = "white";
    question1El.style.backgroundColor = "red";
    q1MarkEl.src =
      "https://www.seekpng.com/png/full/136-1360029_no-tick-red-x.png";
  }

  if (q2_input >= 60 && q2_input <= 62) {
    score = score + 1;
    question2El.style.color = "white";
    question2El.style.backgroundColor = "green";
    q2MarkEl.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Green-checkmark.svg/1957px-Green-checkmark.svg.png";
  } else {
    question2El.style.color = "white";
    question2El.style.backgroundColor = "red";
    q2MarkEl.src =
      "https://www.seekpng.com/png/full/136-1360029_no-tick-red-x.png";
  }

  if (q3_input >= 6 && q3_input <= 9) {
    score = score + 1;
    question3El.style.color = "white";
    question3El.style.backgroundColor = "green";
    q3MarkEl.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Green-checkmark.svg/1957px-Green-checkmark.svg.png";
  } else {
    question3El.style.color = "white";
    question3El.style.backgroundColor = "red";
    q3MarkEl.src =
      "https://www.seekpng.com/png/full/136-1360029_no-tick-red-x.png";
  }

  if (
    q4_input === "galápagos penguin" ||
    q4_input === "galápagos" ||
    q4_input === "galapagos penguin" ||
    q4_input === "galapagos"
  ) {
    score = score + 1;
    question4El.style.color = "white";
    question4El.style.backgroundColor = "green";
    q4MarkEl.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Green-checkmark.svg/1957px-Green-checkmark.svg.png";
  } else {
    question4El.style.color = "white";
    question4El.style.backgroundColor = "red";
    q4MarkEl.src =
      "https://www.seekpng.com/png/full/136-1360029_no-tick-red-x.png";
  }

  if (q5_input >= 30 && q5_input <= 40) {
    score = score + 1;
    question5El.style.color = "white";
    question5El.style.backgroundColor = "green";
    q5MarkEl.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Green-checkmark.svg/1957px-Green-checkmark.svg.png";
  } else {
    question5El.style.color = "white";
    question5El.style.backgroundColor = "red";
    q5MarkEl.src =
      "https://www.seekpng.com/png/full/136-1360029_no-tick-red-x.png";
  }

  resultEl.innerHTML = score + "/5";
  if (score === 0) {
    percentageEl.innerHTML = "0%";
    feedbackEl.innerHTML = "Do your research >:(";
  } else if (score === 1) {
    percentageEl.innerHTML = "20%";
    feedbackEl.innerHTML = "Better luck next time :(";
  } else if (score === 2) {
    percentageEl.innerHTML = "40%";
    feedbackEl.innerHTML =
      "Improve your score by clicking the link to learn more.";
  } else if (score === 3) {
    percentageEl.innerHTML = "60%";
    feedbackEl.innerHTML = "Good job!";
  } else if (score === 4) {
    percentageEl.innerHTML = "80%";
    feedbackEl.innerHTML = "Excellent work!";
  } else if (score === 5) {
    percentageEl.innerHTML = "100%";
    feedbackEl.innerHTML = "Wow! You're the penguin master :)";
  }
}
