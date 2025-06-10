// ChatListView component

export function ChatListView() {
  return {
    template: `
      <div id="chatListView" class="chat-list-view w-full h-full text-white">
        <div class="chat-list-header flex justify-between items-center p-4 relative">
            <h1 class="text-2xl font-semibold">Discussions</h1>
            <div class="actions flex gap-4">
                <button class="fill-gray-500 hover:fill-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="" d="M16 9a1 1 0 0 0-1 1v5h-5a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5v-5a1 1 0 0 0-1-1m0-7C8.268 2 2 8.268 2 16c0 2.37.59 4.605 1.63 6.563L2.06 28.09a1.5 1.5 0 0 0 1.853 1.853l5.528-1.572A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2M4 16C4 9.373 9.373 4 16 4c6.628 0 12 5.373 12 12s-5.372 12-12 12a11.94 11.94 0 0 1-5.942-1.572a1 1 0 0 0-.769-.093l-5.06 1.439l1.438-5.06a1 1 0 0 0-.094-.77A11.94 11.94 0 0 1 4 16"/></svg>
                </button>
                <button class="fill-gray-500 hover:fill-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="" d="M12 7a2 2 0 1 0-2-2a2 2 0 0 0 2 2m0 10a2 2 0 1 0 2 2a2 2 0 0 0-2-2m0-7a2 2 0 1 0 2 2a2 2 0 0 0-2-2"/></svg>
                    
                </button>
            </div>
            <ul class="contextMenu text-left text-gray-400 absolute -bottom-36 right-6 bg-[#202C33] hidden">
                <li class="p-2 cursor-pointer hover:bg-[#8383833b]">Nouveau groupe</li>
                <li class="p-2 cursor-pointer hover:bg-[#8383833b]">Messages importants</li>
                <li class="p-2 cursor-pointer hover:bg-[#8383833b]">Selectionner les discussions</li>
                <li class="logout-btn p-2 cursor-pointer hover:bg-[#8383833b]">Deconnexion</li>
            </ul>
        </div>
        <ul class="chat-list">
          <!-- Chat items will be dynamically inserted here -->
        </ul>
      </div>
    `,
    bindEvents: () => {
      // Bind any events if necessary
      console.log("ChatListView events bound");
    },
  };
}
// This component is responsible for rendering the chat list view
// and can be used in the ChatListContainer or directly in the App component.
