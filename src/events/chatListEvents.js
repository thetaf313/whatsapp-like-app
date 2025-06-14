import { logoutUser } from "../modules/authManager";
import { contactManager } from "../modules/contactManager";
import { store } from "../services/store";

// chatListEvents module
export function initChatListEvents() {

  const contextMenuBtn = document.querySelector('#contextMenuBtn');
  const contextMenuEl = document.querySelector('.contextMenu');
  const logoutBtn = contextMenuEl.querySelector('.logout-btn');
  const contactBtn = document.querySelector('#contactBtn');

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

    
  document.querySelectorAll(".chat-list-item").forEach((item) => {
    item.addEventListener("click", () => {
      console.log('chat item selected');
      // const chatId = item.getAttribute("data-chat-id");
      // Load the chat view for the selected chat
      // loadChatView(chatId);

      // Remove active class from all items and add to the clicked item
      document
        .querySelectorAll(".chat-list-item")
        .forEach((el) => el.classList.remove("active"));
      item.classList.add("active");
    });
  });
}
