// contactListEvents

import { contactManager } from "../modules/contactManager";
import { conversationManager } from "../modules/conversationManager";
import { groupManager } from "../modules/groupManager";

export function initContactListEvents() {
    const contactListView = document.querySelector('#contactListView');
    const previousBtn = contactListView.querySelector('#previousBtn');
    const newContactBtn = contactListView.querySelector('#newContactBtn');
    const newGroupBtn = contactListView.querySelector('#newGroupBtn');

    //return to chats
    previousBtn.addEventListener('click', () => {
        conversationManager.renderChatListView();
    })

    // Add new contact
    newContactBtn.addEventListener('click', () => {
        contactManager.renderAddContactForm();
    })

    // Add new group
    newGroupBtn.addEventListener('click', () => {
        console.log('clicked new group btn');
        groupManager.renderAddContactToGroup();
    })

}