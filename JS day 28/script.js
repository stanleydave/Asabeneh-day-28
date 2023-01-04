const main = document.querySelector("main");

let getDate = new Date();
// get month in words
let month = () => {
  let month = getDate.getMonth();
  if (month == 0) {
    month = "JAN";
  } else if (month == 1) {
    month = "FEB";
  } else if (month == 2) {
    month = "MAR";
  } else if (month == 3) {
    month = "APR";
  } else if (month == 4) {
    month = "MAY";
  } else if (month == 5) {
    month = "JUN";
  } else if (month == 6) {
    month = "JUL";
  } else if (month == 7) {
    month = "AUG";
  } else if (month == 8) {
    month = "SEPT";
  } else if (month == 9) {
    month = "OCT";
  } else if (month == 10) {
    month = "NOV";
  } else month = "DEC";

  return month;
};
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let countryInput = document.getElementById("country");
let scoreInput = document.getElementById("score");

function add() {
  const add = document.createElement("li");
  main.appendChild(add);

  add.setAttribute("class", "add");
  const nameBox = document.createElement("div");
  add.appendChild(nameBox);
  const name = document.createElement("h5");
  const date = document.createElement("p");
  nameBox.appendChild(name);
  nameBox.appendChild(date);
  name.textContent = `${firstname.value.toUpperCase()} ${lastname.value.toUpperCase()}`;
  date.setAttribute("class", "date");
  date.textContent = `${month()}, ${getDate.getDate()}, ${getDate.getFullYear()} ${
    getDate.getHours() + 1
  }:${getDate.getMinutes()}`;

  const country = document.createElement("h5");
  country.setAttribute("class", "top");
  add.appendChild(country);
  country.textContent = countryInput.value.toUpperCase();

  let score = document.createElement("h5");
  add.appendChild(score);
  score.textContent = scoreInput.value;
  score.setAttribute("class", "top");

  let icons = document.createElement("div");
  add.appendChild(icons);
  icons.setAttribute("class", "icons");
  let delBtn = document.createElement("div");
  delBtn.setAttribute("class", "delBtn");
  icons.appendChild(delBtn);

  let plus = document.createElement("div");
  plus.setAttribute("class", "plus");
  plus.textContent = "+5";
  let minus = document.createElement("div");
  minus.setAttribute("class", "minus");
  minus.textContent = "-5";
  icons.appendChild(plus);
  icons.appendChild(minus);
  delBtn.addEventListener("click", (e) => {
    add.parentNode.removeChild(add);
  });
}
function create() {
  if (
    firstname.value === "" ||
    lastname.value === "" ||
    countryInput.value === "" ||
    score.value === ""
  ) {
    const alert = document.querySelector(".alert");
    alert.textContent = "All fields are required";
    alert.style.color = "red";
  } else {
    add();
  }

  firstname.value = "";
  lastname.value = "";
  countryInput.value = "";
  scoreInput.value = "";
}