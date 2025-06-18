// // ChatItem Component
// export function ChatItem(chat = {}) {
//   return `
//         <div class="chat-list-item flex items-center gap-4 min-h-[72px] px-4 py-2 hover:bg-[#5d5b5b28] cursor-pointer" data-id="${chat?.id || 0}">
//                 <div
//                   class="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
//                   style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZX7BqetLZ4ZQyIbWbDNdWU0OcgAztglsstXzwIgNkz9U0-4xMSUARzfVz3UMFn11X9Ryz0bKjtvUO0V70Hyin5sTPevE_N_-6rxCch4rPBCadF5k1UitojhR_dkwMqWWojhZwF3jI9Qg_aCW5R_UhBN741vW0Hg7pvIK_dXh8scmos6-CmtF0ttiCFPqCcsJAFZaPzS55AtuM0elogli-8K2h1mWr_A7N1_fYeimZTIlrJiqHMZ0M0cSvh2qGkS5b_pDKAesvEdo");'
//                 ></div>
//                 <div class="flex flex-wrap flex-1">
//                     <div class="flex justify-between items-center w-full">
//                         <span class="text-[#cfdfe8]">Sophia Clark</span>
//                         <span class="text-xs text-green-500">12:57</span>
//                     </div>
//                     <div class="flex justify-between items-center w-full">
//                         <span class="text-sm text-[#cfdfe8]">Hey, how are you?</span>
//                         <span class="w-5 h-5 text-xs text-gray-900 bg-green-500 rounded-full flex justify-center items-center">1</span>
//                     </div>
//                 </div>
//             </div>
//     `;
// }

import { store } from "../services/store";
import { arrowDownOutlineIcon } from "./Icons";


// ChatItem Component
export function ChatItem(chat = {}) {
  const lastMsg = chat.lastMessage;
  const name = getChatName(chat);
  const time = lastMsg?.timestamp
    ? new Date(lastMsg.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    : "10:00";
  const messagePreview = getMessagePreview(lastMsg);

  return `
    <div class="chat-list-item ${chat.type === 'broadcast' ? 'hidden' : 'flex'} items-center gap-4 min-h-[72px] px-4 py-2 hover:bg-[#5d5b5b28] cursor-pointer transition" data-id="${chat.chatId}">
      <div
        class="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-12 w-fit"
        style='background-image: url("https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}");'
      ></div>
      <div class="flex flex-wrap flex-1">
        <div class="flex justify-between items-center w-full">
          <span class="text-[#cfdfe8] p-1">${name}</span>
          <span class="text-xs text-green-500">${time}</span>
        </div>
        <div class="flex justify-between items-center w-full">
          <span class="text-sm text-[#cfdfe8] flex-1 p-1">${messagePreview}</span>
          <span class="notif w-5 h-5 text-xs text-gray-900 bg-green-500 rounded-full flex justify-center items-center">1</span>
          <span class="context-btn fill-gray-500 stroke-gray-500 hidden ml-1">${arrowDownOutlineIcon()}</span>
        </div>
      </div>
    </div>
  `;
}

function getChatName(chat) {
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
}

function getMessagePreview(msg) {
  if (!msg) return "";
  if (msg.type === "text") return msg.content;
  if (msg.type === "file") return msg.file?.caption || msg.file?.filename || "📎 Fichier";
  return "[Message]";
}
