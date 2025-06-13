// Events for login form

import { authenticateUser } from "../modules/authManager";
import { clearErrors, showError } from "../utils/helper";

export function initLoginFormEvents() {
  const loginBtn = document.querySelector("#loginBtn");
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
      loginBtn.querySelector('#spinner').classList.remove('hidden');

      // authenticateUser(phone)
      //   .then((res) => {
      //       window.location.href = "/";
      //       console.log(res);
      //   })
      //   .catch((error) => {
      //     console.error("Authentication error:", error);
      //     showError(
      //       "globalError",
      //       "Identifiant introuvable."
      //     );
      //   });
      authenticateUser(phone)
        .then((res) => {
          window.location.href = "/";
        })
        .catch((error) => {
          console.error("Authentication error:", error);
          showError("globalError", "Identifiant introuvable.");
        });
    }
  });
}
