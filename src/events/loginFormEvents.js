// Events for login form

import { authenticateUser } from "../modules/authManager";
import { clearErrors, showError } from "../utils/helper";

export function initLoginFormEvents() {
  const loginBtn = document.querySelector("#loginBtn");
  const spinner = loginBtn.querySelector("#spinner");
  const phoneInput = document.querySelector("#phone");
  const globalError = document.querySelector("#globalError");
  const phoneError = document.querySelector("#phoneError");
  // Clear any previous errors
  clearErrors();
  loginBtn.addEventListener("click", () => {
    let phone = phoneInput.value.trim();
    phone = phone.replace(/\s/gi, "");
    phone = phone.replace(/[+]/, "00");
    console.log(phone);

    clearErrors();
    let isValid = true;
    if (!phone) {
      showError("phoneError", "Le numéro de téléphone est requis.");
      isValid = false;
      return;
    }
    if (!/^\d{9,14}$/.test(phone)) {
      showError("phoneError", "Le format du numéro de téléphone est invalide.");
      isValid = false;
      return;
    }

    if (isValid) {
      console.log("ready to authenticate user");
      loginBtn.classList.toggle("cursor-not-allowed");
      loginBtn.disabled = true;
      spinner.classList.remove("hidden");
      spinner.nextElementSibling.textContent = "Loading...";

      authenticateUser(phone)
        .then((res) => {
          console.log(res);
          window.location.href = "/";
        })
        .catch((error) => {
          console.error("Authentication error:", error.message);
          showError("globalError", error.message);
        })
        .finally(() => {
          loginBtn.classList.toggle("cursor-not-allowed");
          loginBtn.disabled = false;
          spinner.classList.add("hidden");
          spinner.nextElementSibling.textContent = "Se connecter";
        });
    }
  });
}
