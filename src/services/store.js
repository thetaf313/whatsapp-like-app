// Store module for managing application state
const API_URL = "https://whatsapp-json-server-app.onrender.com";

export const store = {

  state: {
    contacts: [
      { id: 1, name: 'Twist Price', phone: '783894217', type: 'contact', archived: false, lastMessage: 'Salut ! Comment ça va ?', timestamp: Date.now() - 1000000, avatar: '', profile: 'TP'},
    ],
    groups: [],
    conversations: [],
    filteredConversations: [],
    currentConversation: null,
    currentFilter: "all",
    searchQuery: "",
    isLoading: false,
    isOnline: true,
    currentUser: null,
  },
  setCurrentUser(user) {
    this.state.currentUser = user;
    localStorage.setItem("currentUser", JSON.stringify(user));
  },
  getCurrentUser() {
    return this.state.currentUser || JSON.parse(localStorage.getItem("currentUser"));
  },

  getContacts() {
    return this.state.contacts;
  },

  // version 2
  currentUser: null,
  users: [],
  contacts: [],
  groups: [],
  chats: [],
  broadcasts: [],
  statuses: [],
  validationCodes: [],
  filteredDiscussions: [],
  filteredContacts: [],
  selectedChatId: null,

  // 🔄 Chargement initial
  async loadAll() {
    const [users, chats, groups, broadcasts, statuses, validationCodes] = await Promise.all([
      fetch(`${API_URL}/users`).then(r => r.json()),
      fetch(`${API_URL}/chats`).then(r => r.json()),
      fetch(`${API_URL}/groups`).then(r => r.json()),
      fetch(`${API_URL}/broadcasts`).then(r => r.json()),
      fetch(`${API_URL}/statuses`).then(r => r.json()),
      fetch(`${API_URL}/validationCodes`).then(r => r.json()),
    ]);

    this.users = users;
    this.chats = chats;
    this.groups = groups;
    this.broadcasts = broadcasts;
    this.statuses = statuses;
    this.validationCodes = validationCodes;
  },

  // 🔐 Connexion par numéro (avec code)
  async loginWithPhone(phone) {
    const res = await fetch(`${API_URL}/users?phone=${phone}`);
    const users = await res.json();
    if (users.length > 0) {
      this.currentUser = users[0];
      await this.loadAll(); // Optionnel : pour recharger les contacts, chats, etc.
      return true;
    }
    return false;
  },

   // ➕ Ajouter un nouveau contact
  async addContact(contactId) {
    if (!this.currentUser.contacts.includes(contactId)) {
      this.currentUser.contacts.push(contactId);
      await fetch(`${API_URL}/users/${this.currentUser.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contacts: this.currentUser.contacts })
      });

      const contact = this.users.find(u => u.id === contactId);
      if (contact) this.contacts.push(contact);
    }
  },

};
