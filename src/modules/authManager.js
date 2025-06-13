// module for handling authentication
import { store } from "../services/store";

export function isAuthenticated() {
  if (store.getCurrentUser()) {
    return true;
  }
  return false;
}

function findUserByPhone(phone) {
  return store.getContacts().find(user => user.phone === phone);
}

export function authenticateUser(phone) {
  const user = findUserByPhone(phone);
  return new Promise((resolve, reject) => { 
    if (user) {
      store.setCurrentUser(user);
      resolve('logged in successfully.');
    } else {
      reject('failed to log in.');
    }
   })
}


export function logoutUser() {
  
}