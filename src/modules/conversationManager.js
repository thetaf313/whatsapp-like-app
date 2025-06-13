import { ChatListView } from "../components/ChatListView"
import { renderComponent } from "../utils/dom"

// Conversation Manager Module
export const conversationManager = {

    renderChatListView() {
        const chatListContainer = document.querySelector('#chatListContainer');
        renderComponent(ChatListView, chatListContainer);
    }

}