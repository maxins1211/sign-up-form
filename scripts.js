const email = document.querySelector("#email");
const invalidEmail = document.querySelector("#email-invalid");
const phoneNumber = document.querySelector("#phone-number");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const submitBtn = document.querySelector("#submit-btn");
const invalidPassword = document.querySelector("#password-invalid");
email.addEventListener("keydown", (e) => {
  if (!e.target.value.includes("@")) {
    invalidEmail.classList.remove("hidden");
    email.classList.add("border-red-500");
  } else {
    invalidEmail.classList.add("hidden");
    email.classList.remove("border-red-500");
  }
});

const comparePassword = () => {
  if (password.value !== confirmPassword.value) {
    invalidPassword.classList.remove("hidden");
    password.classList.add("border-red-500");
  } else {
    invalidPassword.classList.add("hidden");
    password.classList.remove("border-red-500");
  }
};

password.addEventListener("keydown", comparePassword);

confirmPassword.addEventListener("keydown", comparePassword);
confirmPassword.addEventListener("keyup", comparePassword);
