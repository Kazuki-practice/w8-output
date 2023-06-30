const emailInput = document.getElementsByName("email")[0];
const passwordInput = document.getElementsByName("password")[0];
const signInButton = document.querySelector(".button");

const lsEmailVal = localStorage.getItem("email");
const lsPasswordVal = localStorage.getItem("password");

if (lsEmailVal) emailInput.value = lsEmailVal;
if (lsPasswordVal) passwordInput.value = lsPasswordVal;

signInButton.addEventListener("click", function (e) {
  e.preventDefault();

  localStorage.setItem("email", emailInput.value);
  localStorage.setItem("password", passwordInput.value);

  this.closest("form").submit();
});

//DOM = $ = ex) $foo
// //定数 = 大文字 + "_" = ex) SAMPLE_VALUE

// const $emailInput = document.querySelector(".input[name='email']");
// const $passwordInput = document.querySelector(".input[name='password']");
// const $signInButton = document.querySelector(".button");

// const lsEmailVal = localStorage.getItem("email");
// const lsPasswordVal = localStorage.getItem("password");

// if(lsEmailVal) $emailInput.value = lsEmailVal;
// if(lsPasswordVal) $passwordInput.value = lsPasswordVal;

// $signInButton.addEventListener("click", function (e) {
//   e.preventDefault();

//   localStorage.setItem("email", $emailInput.value);
//   localStorage.setItem("password", $passwordInput.value);

//   this.closest("form").submit();
// });
