var feedback = document.querySelector(".contacts .btn");
var popup = document.querySelector(".feedback");
var close = document.querySelector(".feedback-btn");
var overlay = document.querySelector(".modal-overlay");
var login = popup.querySelector("[name=login]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=email]");
var storage = localStorage.getItem("login")

  feedback.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("feedback-show");
    overlay.classList.add("modal-overlay-show");

    if (storage) {
      login.value = storage;
      email.focus();
    } else {
      login.focus();
    }
  });

  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("feedback-show");
    overlay.classList.remove("modal-overlay-show");
    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function(event) {
    if (!login.value || !email.value) {
      event.preventDefault();
      popup.classList.add("modal-error");
    }
      else {
        localStorage.setItem("login", login.value);
    }
  });
