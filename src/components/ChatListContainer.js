// ChatListContainer component
export function ChatListContainer() {
  return {
    template: `
            <div id="chatListContainer" class="chat-list-container w-[30rem] h-full bg-[#111B21] text-white">
                
            </div>
        `,
    bindEvents: () => {
      // Bind any events if necessary
      console.log("ChatListContainer events bound");
    },
  };
}
