// contactListEvents 

import { contactManager } from "../modules/contactManager";
import { conversationManager } from "../modules/conversationManager";

export function initContactListEvents() {
    const contactListView = document.querySelector('#contactListView');
    const previousBtn = contactListView.querySelector('#previousBtn');
    const newContactBtn = contactListView.querySelector('#newContactBtn');

    //return to chats
    previousBtn.addEventListener('click', () => {
        conversationManager.renderChatListView();
    })

    // Add new contact
    newContactBtn.addEventListener('click', () => {
        contactManager.renderAddContactForm();
    })

}