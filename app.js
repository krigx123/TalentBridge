registerBtn = document.querySelector(".register");
loginBtn = document.querySelector(".login");
homeLogo = document.querySelector(".logo");

registerBtn.addEventListener("click", function () {
  window.location.href = "register.html";
});

loginBtn.addEventListener("click", function () {
  window.location.href = "login.html";
});

homeLogo.addEventListener("click", function () {
  window.location.href = "index.html";
  console.log("done");
});
