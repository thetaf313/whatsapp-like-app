// chatListEvents module
export function initChatListEvents() {
    
  document.querySelectorAll(".chat-list-item").forEach((item) => {
    item.addEventListener("click", () => {
      const chatId = item.getAttribute("data-chat-id");
      // Load the chat view for the selected chat
      loadChatView(chatId);

      // Remove active class from all items and add to the clicked item
      document
        .querySelectorAll(".chat-list-item")
        .forEach((el) => el.classList.remove("active"));
      item.classList.add("active");
    });
  });
}
