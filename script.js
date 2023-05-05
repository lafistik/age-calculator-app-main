// INPUTS

const inputDay = document.querySelector(".day");
const inputMonth = document.querySelector(".month");
const inputYear = document.querySelector(".year");
const inputs = document.querySelectorAll("input");

// OUTPUTS

const outputDay = document.querySelector(".res-days");
const outputMonth = document.querySelector(".res-months");
const outputYear = document.querySelector(".res-years");

// OTHER

const form = document.querySelector("form");
const btn = document.querySelector(".btn");
const errors = document.querySelectorAll(".error");
const errorDay = document.querySelector(".error-day");
const errorMonth = document.querySelector(".error-month");
const errorYear = document.querySelector(".error-year");
let isValidForm = true;
let isValidDay = true;
let isValidMonth = true;
let isValidYear = true;

// GET TODAYS DAY OBJECT
let date = new Date();

//   GET VALUES AND SAVE IT TO VARIABLES
var d2 = date.getDate();
var m2 = 1 + date.getMonth();
var y2 = date.getFullYear();
var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// HANDLE SUBMIT EVENT

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateInputs();
  if (!isFuture()) {
    if (isValidForm) {
      calcAge();
      clearInputs();
    }
  } else {
    alert("Birthday date can't be in the future");
  }
});

// validateInputs function

function validateInputs() {
  //   VALIDATE DAY

  if (!inputDay.value) {
    errorDay.innerHTML = "This field is required";
    inputDay.style.borderColor = "#ff5757";
    inputDay.parentElement.querySelector("p").style.color = "#ff5757";
    isValidDay = false;
  } else if (inputDay.value > 31 || inputDay.value < 1) {
    errorDay.innerHTML = "Must be a valid day";
    inputDay.style.borderColor = "#ff5757";
    inputDay.parentElement.querySelector("p").style.color = "#ff5757";
    isValidDay = false;
  } else if (isNaN(inputDay.value)) {
    errorDay.innerHTML = "Must be a number";
    inputDay.style.borderColor = "#ff5757";
    inputDay.parentElement.querySelector("p").style.color = "#ff5757";
    isValidDay = false;
  } else {
    errorDay.innerHTML = "";
    inputDay.style.borderColor = "#f0f0f0";
    inputDay.parentElement.querySelector("p").style.color = "#716F6F";
    isValidDay = true;
  }

  //   VALIDATE MONTH

  if (!inputMonth.value) {
    errorMonth.innerHTML = "This field is required";
    inputMonth.style.borderColor = "#ff5757";
    inputMonth.parentElement.querySelector("p").style.color = "#ff5757";
    isValidMonth = false;
  } else if (inputMonth.value > 12 || inputMonth.value < 1) {
    errorMonth.innerHTML = "Must be a valid month";
    inputMonth.style.borderColor = "#ff5757";
    inputMonth.parentElement.querySelector("p").style.color = "#ff5757";
    isValidMonth = false;
  } else if (isNaN(inputMonth.value)) {
    errorMonth.innerHTML = "Must be a number";
    inputMonth.style.borderColor = "#ff5757";
    inputMonth.parentElement.querySelector("p").style.color = "#ff5757";
    isValidMonth = false;
  } else {
    errorMonth.innerHTML = "";
    inputMonth.style.borderColor = "#f0f0f0";
    inputMonth.parentElement.querySelector("p").style.color = "#716F6F";
    isValidMonth = true;
  }

  // VALIDATE YEAR
  if (!inputYear.value) {
    errorYear.innerHTML = "This field is required";
    inputYear.style.borderColor = "#ff5757";
    inputYear.parentElement.querySelector("p").style.color = "#ff5757";
    isValidYear = false;
  } else if (inputYear.value > y2) {
    errorYear.innerHTML = "Must be in the past";
    inputYear.style.borderColor = "#ff5757";
    inputYear.parentElement.querySelector("p").style.color = "#ff5757";
    isValidYear = false;
  } else if (inputYear.value < 1910) {
    errorYear.innerHTML = "Are you immortal?";
    inputYear.style.borderColor = "#ff5757";
    inputYear.parentElement.querySelector("p").style.color = "#ff5757";
    isValidYear = false;
  } else if (isNaN(inputYear.value)) {
    errorYear.innerHTML = "Must be a number";
    inputYear.style.borderColor = "#ff5757";
    inputYear.parentElement.querySelector("p").style.color = "#ff5757";
    isValidYear = false;
  } else {
    errorYear.innerHTML = "";
    inputYear.style.borderColor = "#f0f0f0";
    inputYear.parentElement.querySelector("p").style.color = "#716F6F";
    isValidYear = true;
  }

  if (isValidDay && isValidMonth && isValidYear) {
    isValidForm = true;
    return isValidForm;
  } else {
    isValidForm = false;
    return isValidForm;
  }
}

// CHECK IF DATE IS IN FUTURE

function isFuture() {
  let bdaystr = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
  let bdateObj = new Date(bdaystr);
  if (bdateObj > date) {
    return true;
  } else {
    return false;
  }
}

// calcAge function

function calcAge() {
  // GET VALUES FROM INPUTS AND SAVE TO VARIABLES
  let d1 = inputDay.value;
  let m1 = inputMonth.value;
  let y1 = inputYear.value;

  if (d1 > d2) {
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }

  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }

  let d = d2 - d1;
  let m = m2 - m1;
  let y = y2 - y1;

  outputDay.innerHTML = d;
  outputMonth.innerHTML = m;
  outputYear.innerHTML = y;
}

// CLEAR INPUTS

function clearInputs() {
  inputs.forEach((input) => {
    input.value = "";
  });
}
