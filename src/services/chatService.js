import { store } from "./store";

export const chatService = {
  /**
   * Rassemble tous les chats (directs, groupes, broadcasts) d'un utilisateur
   * et les trie par date de dernier message (le plus récent en premier).
   */
  getAllChatsSorted(userId) {
    console.log('inside getAllChatsSorted');
    console.log(store.chats);
    const result = [];

    // 1. Direct chats
    const directChats = store.chats.filter(
      (chat) => chat.type === "direct" && chat.participants.includes(userId)
    );
    directChats.forEach((chat) => {
      const lastMsg = this.getLastMessage(chat);
      result.push({
        type: "direct",
        chatId: chat.id,
        participants: chat.participants,
        lastMessage: lastMsg,
        timestamp: lastMsg?.timestamp || null,
      });
    });

    // 2. Group chats
    const groupChats = store.chats.filter((chat) => {
      if (chat.type !== "group") return false;
      const group = store.groups.find((g) => g.id === chat.groupId);
      return group && group.members.includes(userId);
    });
    groupChats.forEach((chat) => {
      const lastMsg = this.getLastMessage(chat);
      result.push({
        type: "group",
        chatId: chat.id,
        groupId: chat.groupId,
        lastMessage: lastMsg,
        timestamp: lastMsg?.timestamp || null,
      });
    });

    // 3. Broadcasts reçus
    const receivedBroadcasts = store.broadcasts.filter((b) =>
      b.recipients.includes(userId)
    );
    receivedBroadcasts.forEach((b) => {
      const lastMsg = this.getLastMessage(b);
      result.push({
        type: "broadcast",
        chatId: b.id,
        senderId: b.senderId,
        lastMessage: lastMsg,
        timestamp: lastMsg?.timestamp || null,
      });
    });

    // Tri décroissant selon la date
    result.sort((a, b) => {
      if (!a.timestamp) return 1;
      if (!b.timestamp) return -1;
      return new Date(b.timestamp) - new Date(a.timestamp);
    });

    return result;
  },

  // Récupère le dernier message d'une conversation (chat ou broadcast)
  getLastMessage(convo) {
    if (!convo.messages || convo.messages.length === 0) return null;
    return convo.messages.reduce((latest, current) =>
      new Date(current.timestamp) > new Date(latest.timestamp)
        ? current
        : latest
    );
  },

  getChatName(chat) {
    if (chat.type === "group") {
      const group = store.groups.find((g) => g.id === chat.groupId);
      return group?.name || "Groupe";
    }
    if (chat.type === "direct") {
      const currentUser = store.getCurrentUser();
      const otherId = chat.participants.find((id) => id !== currentUser.id);
      const contact = currentUser.contacts.find((c) => c.id === otherId);
      return contact?.name || "Contact";
    }
    if (chat.type === "broadcast") {
      return "Diffusion";
    }
    return "Inconnu";
  },

  getMessagePreview(msg) {
    if (!msg) return "";
    if (msg.type === "text") return msg.content;
    if (msg.type === "file")
      return msg.file?.caption || msg.file?.filename || "📎 Fichier";
    return "[Message]";
  },
};
