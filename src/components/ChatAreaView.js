import { addBtnIcon, ellipseIcon, sendMessageIcon } from "./Icons";
import { store } from "../services/store";
import { initChatAreaEvents } from "../events/chatAreaEvents";
import { messageList } from "./MessageList";

export function ChatAreaView() {
  const chat = store.getActiveChat();
  if (!chat) return;

  const currentUser = store.getCurrentUser();
  let displayName = "Inconnu";
  let displayDescription = "";
  let avatarHtml = "";

  if (chat.type === "direct") {
    const otherUserId = chat.participants.find((id) => id !== currentUser.id);
    const otherUser = store.users.find((u) => u.id === otherUserId);

    // Vérifie si c’est un contact (nom personnalisé)
    const contactEntry = currentUser.contacts.find((c) => c.id === otherUserId);
    displayName =
      contactEntry?.name || `${otherUser.firstName} ${otherUser.lastName}`;
    displayDescription = `@${otherUser.username}`;
    avatarHtml = `<span class="w-12 h-12 rounded-full bg-gray-600 text-white flex items-center justify-center text-md">
        ${otherUser.firstName[0]}${otherUser.lastName[0]}
      </span>`;
  }

  if (chat.type === "group") {
    const group = store.groups.find((g) => g.id === chat.groupId);
    displayName = group.name;
    displayDescription = `${group.members.length} membres`;
    avatarHtml = `<span class="w-12 h-12 rounded-full bg-gray-600 text-white flex items-center justify-center text-md">
        ${group.name[0]}
      </span>`;
  }

  const messagesHTML = chat.messages
    .map((msg) => {
      const isSentByUser = msg.senderId === currentUser.id;
      return `
        <div class="px-4 py-1 flex ${
          isSentByUser ? "justify-end" : "justify-start"
        }">
          <div class="rounded-xl px-3 py-2 max-w-[70%] ${
            isSentByUser
              ? "bg-[#005C4B] text-white"
              : "bg-gray-200 text-gray-800"
          }">
            ${msg.content}
          </div>
        </div>
      `;
    })
    .join("");

  return {
    template: `
      <section id="content" class="w-full h-full bg-[#212e36] flex flex-col gap-1">
        <!-- Header -->
        <div id="contentHeader" class="flex justify-between items-center bg-inherit px-2 py-3 border-b border-gray-700">
          <div class="profile flex items-center gap-2">
            ${avatarHtml}
            <div class="profile-info leading-tight">
              <div id="title" class="font-semibold text-white">${displayName}</div>
              <div id="description" class="text-sm text-gray-400">${displayDescription}</div>
            </div>
          </div>
          <div id="actions" class="flex gap-2 p-1">
            <span class="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer fill-gray-500">
              ${ellipseIcon()}
            </span>
          </div>
        </div>
        
        ${messageList().template}

        <!-- Footer -->
        <div id="contentFooter" class="flex justify-between items-center gap-2 p-2">
          <span class="fill-gray-600 cursor-pointer">${addBtnIcon()}</span>
          <input
            type="text"
            id="messageInput"
            placeholder="Tape ton message..."
            class="text-sm pl-2 py-2 flex-1 border border-gray-500 bg-[#2b3942] rounded-lg focus:outline-none text-white"
          />
          <span id="sendBtn" class="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer fill-gray-600">
            ${sendMessageIcon()}
          </span>
        </div>
      </section>
    `,
    bindEvents: () => {
      console.log("ChatAreaView events bound");
      initChatAreaEvents();
    },
  };
}
