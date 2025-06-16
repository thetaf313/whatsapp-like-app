import { store } from "./store";
const API_URL = "https://whatsapp-json-server-app.onrender.com";

// Contact services
export const contactService = {
  getContacts() {
    return store.getCurrentUser().contacts;
  },

  findUserByPhone(phone) {
    return store.users.find((user) => user.phone === phone);
  },

  contactAlreadyExist(phone) {
    const currentUser = store.getCurrentUser();
    const contacts = currentUser.contacts;
    const userFound = this.findUserByPhone(phone);
    if (userFound) {
      return contacts.includes(userFound.id);
    }
    return false;
  },

  

  /**
   * Ajoute un contact (id + nom personnalisé) au currentUser
   * @param {string} contactId - ID de l'utilisateur à ajouter comme contact
   * @param {string} contactName - Nom personnalisé du contact
   * @returns {Promise<object>} - Nouveau currentUser mis à jour
   */

  async addContactToUser(contactId, contactName) {
    const currentUser = store.getCurrentUser();

    if (!currentUser || !contactId || !contactName) {
      throw new Error("Données invalides pour l'ajout de contact.");
    }

    // Clone actuel + ajout du nouveau contact
    const updatedContacts = [
      ...(currentUser.contacts || []),
      { id: contactId, name: contactName },
    ];

    // Requête PATCH vers /users/:id
    const res = await fetch(`${API_URL}/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ contacts: updatedContacts }),
    });

    if (!res.ok) {
      throw new Error("Échec de la mise à jour du contact sur le serveur.");
    }

    const updatedUser = await res.json();

    // Met à jour le store local
    store.setCurrentUser(updatedUser);

    return updatedUser;
  },
};
