const remainingQuestions = document.getElementById("remainingQuestions");
const askQuestion = document.getElementById("askQuestion");
const resetTool = document.getElementById("resetTool");
const questionsPerMinute = document.getElementById("questionsPerMinute");
const qpmCountdown = document.getElementById("qpmCountdown");

let gpt4Questions = [];

function updateCounters() {
  remainingQuestions.textContent = 25 - gpt4Questions.length;
}

function updateGPT4Questions() {
  const currentTime = Date.now();
  gpt4Questions = gpt4Questions.filter((questionTime) => {
    return currentTime - questionTime < 3 * 60 * 60 * 1000;
  });
  updateCounters();
  updateTimersList();
  updateQuestionsPerMinute();
}

function changeColors() {
  const questionsLeft = 25 - gpt4Questions.length;
  const percentageLeft = questionsLeft / 25;
  const hue = 120 * percentageLeft;
  document.body.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
  document.body.style.color = questionsLeft <= 5 ? '#fff' : '#000';
}

function updateQuestionsPerMinute() {
  const currentTime = Date.now();
  const questionsInLastMinute = gpt4Questions.filter((questionTime) => {
    return currentTime - questionTime < 7.5 * 60 * 1000;
  }).length;
  questionsPerMinute.textContent = `${questionsInLastMinute / 7.5}`;

  if (questionsInLastMinute > 1) {
    questionsPerMinute.style.color = "red";
  } else {
    questionsPerMinute.style.color = "black";
  }

  updateQPMCountdown();
}

function updateQPMCountdown() {
  const currentTime = Date.now();
  const timeForNextQuestion = gpt4Questions.length > 0 ? gpt4Questions[0] + 7.5 * 60 * 1000 : currentTime;
  const timeUntilBelowThreshold = Math.max(0, timeForNextQuestion - currentTime);
  const timeRemainingFormatted = new Date(timeUntilBelowThreshold).toISOString().substr(11, 8);
  qpmCountdown.textContent = timeRemainingFormatted;
}

askQuestion.addEventListener("click", () => {
  if (gpt4Questions.length < 25) {
    gpt4Questions.push(Date.now());
    updateCounters();
    changeColors();
    updateQuestionsPerMinute();
  }
});

resetTool.addEventListener("click", () => {
  gpt4Questions = [];
  updateCounters();
  changeColors();
  updateQuestionsPerMinute();
});

setInterval(updateGPT4Questions, 1000);

function updateTimersList() {
  const timersList = document.getElementById("timersList");
  const chart = document.getElementById("chart");
  timersList.innerHTML = "";
  chart.innerHTML = "";

  gpt4Questions.forEach((questionTime, index) => {
    const timeRemaining = Math.max(0, 3 * 60 * 60 * 1000 - (Date.now() - questionTime));
    const timeRemainingFormatted = new Date(timeRemaining).toISOString().substr(11, 8);

        // Update the timers list
    const listItem = document.createElement("li");
    listItem.textContent = `Question ${index + 1}: ${timeRemainingFormatted}`;
    timersList.appendChild(listItem);

    // Update the bar chart
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${(timeRemaining / (3 * 60 * 60 * 1000)) * 100}%`;
    chart.appendChild(bar);
  });
}

setInterval(() => {
  updateTimersList();
}, 1000);
