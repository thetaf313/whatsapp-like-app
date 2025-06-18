import { store } from "../services/store";

//
export function messageList() {
  const chat = store.getActiveChat();
  if (!chat) return;

  const currentUser = store.getCurrentUser();

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
        <!-- Body -->
        <div id="contentBody" class="flex-1 overflow-y-auto px-2 py-4" style='background-image: url("assets/chat-wallpaper-img.jpg"); background-size: cover;'>
          ${messagesHTML}
        </div>
        `,

        bindEvents: () => {
            console.log('MessageList mounted');
        }
  };
}
