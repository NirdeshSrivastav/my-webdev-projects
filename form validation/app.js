let btn = document.querySelector("button");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

let nameErr = document.querySelector("#name-err");
let emailErr = document.querySelector("#Email-err");
let passErr = document.querySelector("#Password-err");
let error_msg = document.querySelector(".err-msg");

btn.addEventListener("click", () => {
  let uname = name.value;
  let upass = password.value;
  let uemail = email.value;

  let isError = false;
  if (uname == "") {
    nameErr.style.display = "block";
    isError = true;
  } else {
    nameErr.style.display = "none";
  }
  if (upass == "") {
    passErr.style.display = "block";
    isError = true;
  } else {
    passErr.style.display = "none";
  }
  if (uemail == "") {
    emailErr.style.display = "block";
    isError = true;
  } else {
    emailErr.style.display = "none";
  }

  if (isError) {
    error_msg.style.display = "block";
  } else {
    error_msg.style.display = "none";
  }
});

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
