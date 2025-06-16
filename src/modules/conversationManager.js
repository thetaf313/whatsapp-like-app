import { ChatAreaView } from "../components/ChatAreaView";
import { ChatListView } from "../components/ChatListView"
import { ChatListViewSkeleton } from "../components/ChatListViewSkeleton";
import { renderComponent } from "../utils/dom"

// Conversation Manager Module
export const conversationManager = {

    renderChatListView() {
        const chatListContainer = document.querySelector('#chatListContainer');
        renderComponent(ChatListView, chatListContainer);
    },

    renderChatAreaView() {
        const chatAreaContainer = document.querySelector('#chatAreaContainer');
        renderComponent(ChatAreaView, chatAreaContainer);
    },

    renderChatListViewSkeleton() {
        const chatListContainer = document.querySelector('#chatListContainer');
        renderComponent(ChatListViewSkeleton, chatListContainer);
    }

}