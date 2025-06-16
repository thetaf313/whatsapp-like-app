import { contactManager } from "../modules/contactManager";
import { contactService } from "../services/contactService";
import { store } from "../services/store";
import {
  clearErrors,
  clearWarnings,
  isAppValidPhone,
  showError,
  showWarning,
  showSuccess,
  isAppUniquePhone,
  generateNewUserId,
  getUserStatusByPhone,
} from "../utils/helper";

export function initAddContactFormEvents() {
  const addContactFormView = document.querySelector("#addContactFormView");
  const previousBtn = addContactFormView.querySelector("#previousBtn");
  const addContactBtn = addContactFormView.querySelector("#addContactBtn");

  const firstName = addContactFormView.querySelector("#firstName");
  const lastName = addContactFormView.querySelector("#lastName");
  const phoneNumber = addContactFormView.querySelector("#phoneNumber");
  const globalSuccess = document.querySelector("#globalSuccess");

  // Retour à la liste des contacts
  previousBtn.addEventListener("click", () => {
    contactManager.renderContactListView();
  });

  // Validation à la volée du numéro
  phoneNumber.addEventListener("input", function () {
    clearWarnings();
    clearErrors();
    this.value = this.value.replace(/[^0-9]/g, "");

    const phone = this.value;

    if (phone.length === 9) {
      if (isAppValidPhone(phone)) {
        showWarning("phoneNumber", "Ce numéro est sur WhatsApp");
      } else {
        showWarning("phoneNumber", "Ce numéro n'est pas sur WhatsApp.");
      }
    } else if (phone.length !== 9) {
      showWarning(
        "phoneNumber",
        "Le numéro est invalide (9 chiffres attendus)."
      );
    }
  });

  // Soumission du formulaire
  addContactBtn.addEventListener("click", () => {
    clearErrors();
    clearWarnings();

    const fnInput = firstName.value.trim();
    const lnInput = lastName.value.trim();
    let pnInput = phoneNumber.value.trim();

    let isValid = true;

    if (!fnInput) {
      showError("firstName", "Le champ prénom est requis.");
      isValid = false;
    }

    if (!pnInput) {
      showError("phoneNumber", "Le champ téléphone est requis.");
      isValid = false;
    } else if (!/^\d{9}$/.test(pnInput)) {
      showError(
        "phoneNumber",
        "Le numéro de téléphone doit contenir exactement 9 chiffres."
      );
      isValid = false;
    }

    // const phoneIsAppValid = isAppValidPhone(pnInput);
    // const phoneIsAppUnique = isAppUniquePhone(pnInput);

    const { isOnApp, isContact, user } = getUserStatusByPhone(pnInput);

    if (!isOnApp) {
      showWarning("phoneNumber", "Ce numéro n'est pas sur WhatsApp.");
      return;
    }

    if (isContact) {
      showError("phoneNumber", "Ce contact est déjà enregistré.");
      return;
    }

    if (isValid && isOnApp && !isContact) {
      const newContact = {
        id: user.id, // 👈 On utilise l'id réel de l'utilisateur WhatsApp
        name: `${fnInput} ${lnInput || ""}`.trim(),
      };

      console.log(newContact);
      contactService.addContactToUser(newContact.id, newContact.name);

      showSuccess("globalSuccess", "Contact ajouté avec succès ✔");

      // Vider les champs
      firstName.value = "";
      lastName.value = "";
      phoneNumber.value = "";

      // Retour à la liste après 2 secondes
      setTimeout(() => {
        contactManager.renderContactListView();
      }, 2000);
    }

    // if (isValid && phoneIsAppValid && !phoneIsAppUnique) {
    //   showError("phoneNumber", "Ce contact existe deja.");
    // }
  });
}
