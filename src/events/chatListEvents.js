import { logoutUser } from "../modules/authManager";
import { contactManager } from "../modules/contactManager";
import { conversationManager } from "../modules/conversationManager";
import { store } from "../services/store";

// chatListEvents module
export function initChatListEvents() {

  const contextMenuBtn = document.querySelector('#contextMenuBtn');
  const contextMenuEl = document.querySelector('.contextMenu');
  const logoutBtn = contextMenuEl.querySelector('.logout-btn');
  const contactBtn = document.querySelector('#contactBtn');
  const contextBtns = document.querySelectorAll('.chat-list-item .context-btn');

  contextMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('clicked on contextMenuBtn');
    contextMenuEl.classList.remove('hidden');
  });
  document.addEventListener('click', () => {
    contextMenuEl.classList.add('hidden');
  });
  // Logout Button
  logoutBtn.addEventListener('click', () => {
    // logout algorithm
    console.log('logging out ...');
  })
  // Contact button
  contactBtn.addEventListener('click', () => {
    contactManager.renderContactListView();
  });

  logoutBtn.addEventListener('click', () => {
    logoutUser();
  })

  contextBtns.forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      console.log('show popup for chatscontextMenu');
    })
  })

    
  document.querySelectorAll(".chat-list-item").forEach((item) => {
    item.addEventListener("click", () => {
      console.log('chat item selected');
      
      // Remove active class from all items and add to the clicked item
      document
        .querySelectorAll(".chat-list-item")
        .forEach((el) => el.classList.remove("active-chat"));
      item.classList.add("active-chat");
      item.querySelector('.notif').classList.add('hidden');

      const chatId = item.dataset.id;
      store.setActiveChat(chatId);
       // store.selectedChatId = item.dataSet.id;
      // Load the chat view for the selected chat
      conversationManager.renderChatAreaView();
    });
  });
}
