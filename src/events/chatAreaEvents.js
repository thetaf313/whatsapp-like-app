import { ChatAreaView } from "../components/ChatAreaView";
import { conversationManager } from "../modules/conversationManager";
import { store } from "../services/store";

export function initChatAreaEvents() {
  const input = document.querySelector("#messageInput");
  const sendBtn = document.querySelector("#sendBtn");
  const chat = store.getActiveChat();
  const currentUser = store.getCurrentUser();

  if (!chat || !currentUser) return;

  const sendMessage = async () => {
    const content = input.value.trim();
    if (!content) return;

    const newMessage = {
      senderId: currentUser.id,
      content,
      timestamp: new Date().toISOString(),
      type: "text",
    };

    chat.messages.push(newMessage);

    try {
      // Récupérer chat actuel depuis serveur
      const res = await fetch(`https://whatsapp-json-server-app.onrender.com/chats/${chat.id}`);
      const chatData = await res.json();
      const updatedMessages = [...(chatData.messages || []), newMessage];

      // Mise à jour locale
      chat.messages = updatedMessages;
      input.value = "";
      store.setActiveChat(chat.id);

      // Re-render UI
      const appContainer = document.querySelector("#chatAreaContainer");
      const view = ChatAreaView();
      appContainer.innerHTML = view.template;
      view.bindEvents();
      conversationManager.renderChatListView();

      // Envoi PATCH vers le serveur
      await fetch(`https://whatsapp-json-server-app.onrender.com/chats/${chat.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      

      // Scroll en bas
      const body = document.querySelector("#contentBody");
      if (body) body.scrollTop = body.scrollHeight;
    } catch (error) {
      console.error("Erreur envoi message:", error);
    }
  };

  // Envoi via clic
  sendBtn.addEventListener("click", sendMessage);

  // Envoi via Entrée
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  });

  // ➕ Rafraîchissement automatique des messages
  const intervalId = setInterval(async () => {
    try {
      const res = await fetch(`https://whatsapp-json-server-app.onrender.com/chats/${chat.id}`);
      const chatData = await res.json();
      store.setActiveChat(chat.id);
      store.updateChat(chat.id, chatData);

      const appContainer = document.querySelector("#chatAreaContainer");
      const view = ChatAreaView();
      appContainer.innerHTML = view.template;
      view.bindEvents();

      const body = document.querySelector("#contentBody");
      if (body) body.scrollTop = body.scrollHeight;
    } catch (err) {
      console.error("Erreur synchronisation chat:", err);
    }
  }, 10000);

  // Nettoyage (au cas où un intervalle existait déjà)
  if (window.chatAreaIntervalId) {
    clearInterval(window.chatAreaIntervalId);
  }
  window.chatAreaIntervalId = intervalId;
}

// 💬 Génère la liste des messages HTML
// export function renderMessages(chat, currentUser) {
//   if (!chat || !chat.messages) return "";

//   return chat.messages
//     .map((msg) => {
//       const isMe = msg.senderId === currentUser.id;
//       const alignment = isMe ? "text-right" : "text-left";
//       const bgColor = isMe ? "bg-blue-100" : "bg-gray-200";

//       return `
//         <div class="${alignment} my-1">
//           <span class="inline-block px-3 py-1 rounded ${bgColor}">
//             ${msg.content}
//           </span>
//         </div>
//       `;
//     })
//     .join("");
// }
