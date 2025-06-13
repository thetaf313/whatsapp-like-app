// AddContactFormEvents Events

import { contactManager } from "../modules/contactManager";
import { clearErrors, showError } from "../utils/helper";

export function initAddContactFormEvents() {
  const addContactFormView = document.querySelector("#addContactFormView");
  const previousBtn = addContactFormView.querySelector("#previousBtn");
  const addContactBtn = addContactFormView.querySelector("#addContactBtn");

  const firstName = addContactFormView.querySelector("#firstName");
  const lastName = addContactFormView.querySelector("#lastName");
  const phoneNumber = addContactFormView.querySelector("#phoneNumber");

  //return to ContactListView
  previousBtn.addEventListener("click", () => {
    contactManager.renderContactListView();
  });

  //add contact
  addContactBtn.addEventListener("click", () => {
    console.log("addContactBtn clicked");
    clearErrors();
    let fnInput = firstName.value.trim();
    let lnInput = lastName.value.trim();
    let pnInput = phoneNumber.value.trim();

    let isValid = true;

    if (!fnInput) {
      isValid = false;
      showError("firstName", "Le champ prenom est requis.");
    }

    if (!pnInput) {
      isValid = false;
      showError("phoneNumber", "Le champ telephone est requis.");
    } else if (!/^\d{9,}$/.test(phone)) {
      showError("phoneNumber", "Le numéro n'est pas valide.");
      isValid = false;
    }

    if (isValid) {
      console.log("valid form!");
    }
  });
}
