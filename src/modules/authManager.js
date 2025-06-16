// module for handling authentication
import { store } from "../services/store";

export function isAuthenticated() {
  if (store.getCurrentUser()) {
    return true;
  }
  return false;
}

function findUserByPhone(phone) {
  return store.getContacts().find((user) => user.phone === phone);
}

// export function authenticateUser(phone) {
//   // const user = findUserByPhone(phone);
//   return new Promise((resolve, reject) => {

//     if (user) {
//       store.setCurrentUser(user);
//       resolve("logged in successfully.");
//     } else {
//       reject("failed to log in.");
//     }
//   });
// }
function timeoutPromise(ms) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Une erreur est survenue lors de la connexion. Réessayez plus tard."));
    }, ms);
  });
}

export async function authenticateUser(phone) {
  try {
    const success = await Promise.race([
      store.loginWithPhone(phone),
      timeoutPromise(10000),
    ]);

    if (success) {
      store.setCurrentUser(store.getCurrentUser());
      return "logged in successfully.";
    } else {
      throw new Error("Identifiants incorrects.");
    }
  } catch (error) {
    throw error;
  }
}


export function logoutUser() {
  store.logoutCurrentUser();
  window.location.href = "/";
}
