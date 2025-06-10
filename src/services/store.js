// Store module for managing application state
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
  }
};
