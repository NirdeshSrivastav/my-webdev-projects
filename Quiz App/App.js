let opt1 = document.querySelector("#l1");
let opt2 = document.querySelector("#l2");
let opt3 = document.querySelector("#l3");
let opt4 = document.querySelector("#l4");
let lbl = [opt1, opt2, opt3, opt4];
let qs = ["question 1", "question 2", "question 3", "question 4", "question 5"];
let ans = [
  ["answer 1-1", "answer 1-2", "answer 1-3", "answer 1-4"],
  ["answer 2-1", "answer 2-2", "answer 2-3", "answer 2-4"],
  ["answer 3-1", "answer 3-2", "answer 3-3", "answer 3-4"],
  ["answer 4-1", "answer 4-2", "answer 4-3", "answer 4-4"],
  ["answer 5-1", "answer 5-2", "answer 5-3", "answer 5-4"],
];
let answers = [
  ["answer 1-1"],
  ["answer 2-2"],
  ["answer 3-3"],
  ["answer 4-4"],
  ["answer 5-1"],
];
let marks = [];
let totalMarks = 0;

let mark = document.querySelector("span");
mark.innerText = "0";

let incorrect = document.querySelector(".incorrect");
let correct = document.querySelector(".correct");

let h1 = document.querySelector("h1");

let count = 0;

let start = document.querySelector("#start");

let prev = document.querySelector("#prev");

let next = document.querySelector("#next");

let container = document.querySelector(".container");

start.addEventListener("click", () => {
  start.style.display = "none";
  container.style.display = "flex";

  setOptions();
});

function setOptions() {
  h1.innerText = qs[count];
  let i = 0;
  for (value of ans[count]) {
    lbl[i].innerText = value;
    i++;
  }
}

prev.addEventListener("click", (e) => {
  if (count == 0) {
    alert("No previous data to show");
  } else {
    count--;
    console.log(count);
    setOptions();
  }
});

next.addEventListener("click", (e) => {
  if (count == qs.length - 1) {
    alert("No next data to show");
  } else {
    count++;
    console.log(count);
    setOptions();
  }
});

opt1.addEventListener("click", () => {
  console.log(opt1.innerText);
  let ans = opt1.innerText;
  checkAns(count, ans);
});

opt2.addEventListener("click", () => {
  console.log(opt2.innerText);
  let ans = opt2.innerText;
  checkAns(count, ans);
});

opt3.addEventListener("click", () => {
  console.log(opt3.innerText);
  let ans = opt3.innerText;
  checkAns(count, ans);
});

opt4.addEventListener("click", () => {
  console.log(opt4.innerText);
  let ans = opt4.innerText;
  checkAns(count, ans);
});

function checkAns(count, answer) {
  if (answer == answers[count]) {
    marks[count] = true;
    mark.innerText = parseInt(mark.innerText) + 10;
    // console.log("turned on");
    setTimeout(() => {
      correct.style.display = "block";
    }, 0);
    // console.log("turned off");
    setTimeout(() => {
      correct.style.display = "none";
    }, 2000);
  } else {
    marks[count] = false;
    mark.innerText = parseInt(mark.innerText) - 10;
    // console.log("turned on");
    setTimeout(() => {
      incorrect.style.display = "block";
    }, 0);
    // console.log("turned off");
    setTimeout(() => {
      incorrect.style.display = "none";
    }, 2000);
  }
}
