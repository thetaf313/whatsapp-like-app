// Store module for managing application state

const API_URL = "https://whatsapp-json-server-app.onrender.com";

export const store = {
  state: {
    contacts: [
      {
        id: 1,
        name: "Twist Price",
        phone: "783894217",
        type: "contact",
        archived: false,
        lastMessage: "Salut ! Comment ça va ?",
        timestamp: Date.now() - 1000000,
        avatar: "",
        profile: "TP",
      },
    ],
  },
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
  conversations: [],
  currentConversation: null,
  currentFilter: "all",
  searchQuery: "",
  isLoading: false,
  isOnline: true,

  setCurrentUser(user) {
    this.currentUser = user;
    localStorage.setItem("currentUser", JSON.stringify(user));
  },
  getCurrentUser() {
    return this.currentUser || JSON.parse(localStorage.getItem("currentUser"));
  },

  logoutCurrentUser() {
    this.currentUser = null;
    localStorage.removeItem("currentUser");
  },

  // 🔄 Chargement initial
  async loadAll() {
    const [users, chats, groups, broadcasts, statuses, validationCodes] =
      await Promise.all([
        fetch(`${API_URL}/users`).then((r) => r.json()),
        fetch(`${API_URL}/chats`).then((r) => r.json()),
        fetch(`${API_URL}/groups`).then((r) => r.json()),
        fetch(`${API_URL}/broadcasts`).then((r) => r.json()),
        fetch(`${API_URL}/statuses`).then((r) => r.json()),
        fetch(`${API_URL}/validationCodes`).then((r) => r.json()),
      ]);

    this.users = users;
    this.chats = chats;
    this.groups = groups;
    this.broadcasts = broadcasts;
    this.statuses = statuses;
    this.validationCodes = validationCodes;
    console.log('data have been loaded');
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
        body: JSON.stringify({ contacts: this.currentUser.contacts }),
      });

      const contact = this.users.find((u) => u.id === contactId);
      if (contact) this.contacts.push(contact);
    }
  },

  getContacts() {
    console.log(this.currentUser);
    if (!this.currentUser) return [];

    this.contacts = this.currentUser.contacts
      .map((id) => this.users.find((u) => u.id === id))
      .filter(Boolean);

    return this.contacts;
  },

  // 👥 Créer un groupe
  async createGroup(name, memberIds) {
    const group = {
      id: Date.now().toString(),
      name,
      members: memberIds,
      admins: [this.currentUser.id],
      createdAt: new Date().toISOString(),
    };

    await fetch(`${API_URL}/groups`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(group),
    });

    const chat = {
      id: `g-${group.id}`,
      type: "group",
      groupId: group.id,
      messages: [],
      lastMessageAt: null,
    };

    await fetch(`${API_URL}/chats`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(chat),
    });

    this.groups.push(group);
    this.chats.push(chat);
  },

  // ✉️ Envoyer un message
  async sendMessage(chatId, content, type = "text", file = null, caption = "") {
    const chat = this.chats.find((c) => c.id === chatId);
    if (!chat) return;

    const message = {
      id: Date.now().toString(),
      senderId: this.currentUser.id,
      timestamp: new Date().toISOString(),
      type,
      content,
      file,
      caption,
    };

    chat.messages.push(message);
    chat.lastMessageAt = message.timestamp;

    await fetch(`${API_URL}/chats/${chatId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: chat.messages,
        lastMessageAt: chat.lastMessageAt,
      }),
    });
  },

  // 📂 Archiver une discussion
  async archiveChat(chatId) {
    if (!this.currentUser.archivedChats.includes(chatId)) {
      this.currentUser.archivedChats.push(chatId);
      await fetch(`${API_URL}/users/${this.currentUser.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ archivedChats: this.currentUser.archivedChats }),
      });
    }
  },

  // 📤 Désarchiver une discussion
  async unarchiveChat(chatId) {
    this.currentUser.archivedChats = this.currentUser.archivedChats.filter(
      (id) => id !== chatId
    );
    await fetch(`${API_URL}/users/${this.currentUser.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ archivedChats: this.currentUser.archivedChats }),
    });
  },

  // 🚫 Bloquer un contact
  async blockUser(contactId) {
    if (!this.currentUser.blockedUsers.includes(contactId)) {
      this.currentUser.blockedUsers.push(contactId);
      await fetch(`${API_URL}/users/${this.currentUser.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ blockedUsers: this.currentUser.blockedUsers }),
      });
    }
  },

  // ❌ Supprimer une discussion
  async deleteChat(chatId) {
    await fetch(`${API_URL}/chats/${chatId}`, {
      method: "DELETE",
    });
    this.chats = this.chats.filter((chat) => chat.id !== chatId);
  },

  // ✏️ Mettre à jour son profil
  async updateProfile(updates) {
    Object.assign(this.currentUser, updates);
    await fetch(`${API_URL}/users/${this.currentUser.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
  },

  // 🔍 Filtrer discussions
  filterDiscussions(searchText) {
    this.filteredDiscussions = this.chats.filter((chat) => {
      if (chat.type === "direct") {
        const otherUserId = chat.members.find(
          (id) => id !== this.currentUser.id
        );
        const otherUser = this.users.find((u) => u.id === otherUserId);
        return (
          otherUser &&
          otherUser.firstname.toLowerCase().includes(searchText.toLowerCase())
        );
      } else if (chat.type === "group") {
        const group = this.groups.find((g) => g.id === chat.groupId);
        return (
          group && group.name.toLowerCase().includes(searchText.toLowerCase())
        );
      }
      return false;
    });
  },

  // 🔍 Filtrer contacts
  filterContacts(searchText) {
    this.filteredContacts = this.contacts.filter(
      (contact) =>
        contact.firstname.toLowerCase().includes(searchText.toLowerCase()) ||
        contact.lastname.toLowerCase().includes(searchText.toLowerCase()) ||
        contact.username.toLowerCase().includes(searchText.toLowerCase())
    );
  },

  // 🚪 Déconnexion
  logout() {
    this.currentUser = null;
    this.selectedChatId = null;
    localStorage.removeItem("currentUser");
  },
};
