import { AddContactForm } from "../components/AddContactForm";
import { ContactListView } from "../components/ContactListView";
import { renderComponent } from "../utils/dom";

// contactManager module
export const contactManager = {

    renderContactListView() {
        const chatListContainer = document.querySelector('#chatListContainer');
        console.log('rendering ContactListView');
        renderComponent(ContactListView, chatListContainer);
    },

    renderAddContactForm() {
        const chatListContainer = document.querySelector('#chatListContainer');
        console.log('rendering AddContactForm');
        renderComponent(AddContactForm, chatListContainer);
    }

}