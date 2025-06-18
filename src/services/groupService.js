import { store } from "./store";

const API_URL = "https://whatsapp-json-server-app.onrender.com";

export const groupService = {
  async createGroup({ name, creatorId, members }) {
    // Étape 1 – Créer le groupe dans le backend
    const groupRes = await fetch(`${API_URL}/groups`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        creatorId,
        members,
        createdAt: new Date().toISOString(),
      }),
    });

    if (!groupRes.ok) {
      throw new Error("Échec de la création du groupe.");
    }

    const group = await groupRes.json();

    // Étape 2 – Créer le chat du groupe avec un message de bienvenue
    const welcomeMessage = {
      senderId: creatorId,
      timestamp: new Date().toISOString(),
      type: "text",
      content: `Bienvenue dans le groupe "${name || 'Sans nom'}" !`,
    };

    const chatRes = await fetch(`${API_URL}/chats`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "group",
        groupId: group.id,
        messages: [welcomeMessage],
      }),
    });

    if (!chatRes.ok) {
      throw new Error("Échec de la création du chat du groupe.");
    }

    const chat = await chatRes.json();

    // Étape 3 – Mettre à jour le store local
    store.groups.push(group);
    store.chats.push(chat);

    return { group, chat };
  },
};
