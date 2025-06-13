// ChatListView component

import { initChatListEvents } from "../events/chatListEvents";
import { ChatItem } from "./ChatItem";
import { SearchBox } from "./SearchBox";
import { TabsContainer } from "./TabsContainer";

export function ChatListView() {
  return {
    template: `
      <div id="chatListView" class="chat-list-view w-full h-full flex flex-col text-white overflow-hidden">
        <div class="chat-list-header flex justify-between items-center p-4 mb-3 relative">
            <h1 class="text-2xl font-semibold">Discussions</h1>
            <div class="actions flex gap-4">
                <button data-link="" id="contactBtn" class="fill-gray-500 hover:fill-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="" d="M16 9a1 1 0 0 0-1 1v5h-5a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5v-5a1 1 0 0 0-1-1m0-7C8.268 2 2 8.268 2 16c0 2.37.59 4.605 1.63 6.563L2.06 28.09a1.5 1.5 0 0 0 1.853 1.853l5.528-1.572A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2M4 16C4 9.373 9.373 4 16 4c6.628 0 12 5.373 12 12s-5.372 12-12 12a11.94 11.94 0 0 1-5.942-1.572a1 1 0 0 0-.769-.093l-5.06 1.439l1.438-5.06a1 1 0 0 0-.094-.77A11.94 11.94 0 0 1 4 16"/></svg>
                </button>
                <button id="contextMenuBtn" class="fill-gray-500 hover:fill-gray-700">
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
        ${SearchBox({
          icons: {
            searchIcon: `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-gray-400"
          >
            <path
              fill=""
              d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
            />
          </svg>`
          }
        })}
        ${TabsContainer()}
        <ul class="chat-list flex-1 py-2 overflow-y-scroll">
          <div class="archive-btn text-md flex gap-6 pl-4 py-2 mx-4 mb-2 cursor-pointer">
            <span class="fill-[#06a583]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="" d="M12 10q-.425 0-.712.288T11 11v3.2l-.9-.9q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l2.6 2.6q.3.3.7.3t.7-.3l2.6-2.6q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275l-.9.9V11q0-.425-.288-.712T12 10M5 8v11h14V8zm0 13q-.825 0-1.412-.587T3 19V6.525q0-.35.113-.675t.337-.6L4.7 3.725q.275-.35.687-.538T6.25 3h11.5q.45 0 .863.188t.687.537l1.25 1.525q.225.275.338.6t.112.675V19q0 .825-.587 1.413T19 21zm.4-15h13.2l-.85-1H6.25zm6.6 7.5"/></svg></span> <strong class="flex-1 border-double border-b-4 border-gray-600 pb-2">Archivées</strong>
            <span class="rounded-full text-sm text-green-500">2</span>
          </div>
          <!-- Chat items will be dynamically inserted here -->
          ${ChatItem()}
          ${ChatItem()}
          ${ChatItem()}
          ${ChatItem()}
          ${ChatItem()}
          ${ChatItem()}
          ${ChatItem()}
        </ul>
      </div>
    `,
    bindEvents: () => {
      // Bind any events if necessary
      console.log("ChatListView events bound");
      initChatListEvents();
    },
  };
}
// This component is responsible for rendering the chat list view
// and can be used in the ChatListContainer or directly in the App component.
