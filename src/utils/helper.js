// helper functions for the application

import { contactService } from "../services/contactService";
import { store } from "../services/store";

export function clearErrors() {
  const errorFields = document.querySelectorAll("[data-error-for]");
  errorFields.forEach((div) => {
    div.textContent = "";
  });
}

export function clearWarnings() {
  const warningFields = document.querySelectorAll("[data-warning-for]");
  warningFields.forEach((div) => {
    div.textContent = "";
  });
}

export function showError(field, message) {
  const errorDiv = document.querySelector(`[data-error-for="${field}"]`);
  if (errorDiv) {
    errorDiv.textContent = message;
  }
}

export function showWarning(field, message) {
  const errorDiv = document.querySelector(`[data-warning-for="${field}"]`);
  if (errorDiv) {
    errorDiv.textContent = message;
  }
}

export function showSuccess(targetId, message) {
  const element = document.getElementById(targetId);
  if (!element) return;

  element.textContent = message;
  element.classList.remove("hidden");
  element.classList.add("text-green-600");

  setTimeout(() => {
    element.textContent = "";
    element.classList.add("hidden");
  }, 3000);
}

export function checkInputs(inputs) {
  inputs.forEach((input) => {
    if (input.value.trim()) {
    }
  });
}

export function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export function createAvatar(name, color = "#ccc") {
  const initials = getInitials(name);
  return `
    <div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style="background:${color}">
      ${initials}
    </div>`;
}

export function randomColor() {
  const colors = ["#F87171", "#60A5FA", "#34D399", "#FBBF24"];
  return colors[Math.floor(Math.random() * colors.length)];
}

export function formatTime(timestamp) {
  if (!timestamp) return "";

  const date = new Date(timestamp);
  const now = new Date();

  const isToday =
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear();

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  if (isToday) {
    return `${hours}:${minutes}`;
  } else {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    return `${day}/${month} ${hours}:${minutes}`;
  }
}

// export function isAppValidPhone(phone) {
//   console.log(store.users);
//   const found = store.users.filter(user => user.phone === phone);
//   if (found[0]) {
//     return true;
//   }
//   return false;
// }

export function isAppValidPhone(phone) {
  // Normaliser les numéros stockés à 9 chiffres (ex : 77xxxxxxx)
  const cleanPhone = phone.slice(-9); // garder les 9 derniers chiffres
  const found = store.users.find((user) => user.phone.slice(-9) === cleanPhone);
  return Boolean(found);
}

export function isAppUniquePhone(phone) {
  const user = store.users.find((u) => u.phone === phone);
  if (!user) return false; // pas un utilisateur WhatsApp
  const contact = contactService.getContacts().find((c) => c.id === user.id);
  return !contact; // return true si ce contact n'est pas encore dans la liste
}

/**
 * Retourne l'état du numéro dans l'application :
 * - s'il appartient à un utilisateur WhatsApp
 * - s'il est déjà dans les contacts de l'utilisateur actuel
 *
 * @param {string} phone - Numéro de téléphone (sans espaces ni +)
 * @returns {Object} - { isOnApp: boolean, isContact: boolean, user: object|null }
 */
export function getUserStatusByPhone(phone) {
  const user = store.users.find(u => u.phone === phone);
  const currentUser = store.getCurrentUser();
  const contacts = contactService.getContacts();

  if (!user) {
    return {
      isOnApp: false,
      isContact: false,
      user: null
    };
  }

  const isAlreadyContact = contacts.some(c => c.id === user.id);

  return {
    isOnApp: true,
    isContact: isAlreadyContact,
    user
  };
}


export function generateNewUserId(users) {
  const maxId = users
    .map((u) => parseInt(u.id.replace("u", "")))
    .reduce((max, curr) => Math.max(max, curr), 0);
  return `u${maxId + 1}`;
}


export function getInitialAvatar(firstName = "", lastName = "", className = "") {
  const initials = `${firstName[0] || ""}${lastName[0] || ""}`.toUpperCase();
  return `
    <div class="flex items-center justify-center bg-gray-600 text-white rounded-full ${className}">
      ${initials}
    </div>
  `;
}
