// window.localStorage.setItem("email", num);
// const email = window.localStorage.getItem("email");

// window.localStorage.setItem("password", num);
// const password = window.localStorage.setItem("password");

document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.querySelector(".input[name='email']");
  const passwordInput = document.querySelector(".input[name='password']");
  const signInButton = document.querySelector(".button");

  emailInput.value = localStorage.getItem("email") || "";
  passwordInput.value = localStorage.getItem("password") || "";

  signInButton.addEventListener("click", function (e) {
    e.preventDefault();

    localStorage.setItem("email", emailInput.value);
    localStorage.setItem("password", passwordInput.value);

    this.closest("form").submit();
  });
});
