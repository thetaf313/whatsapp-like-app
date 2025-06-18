import { AddContactToGroup } from "../components/AddContactToGroup";
import { NewGroupForm } from "../components/NewGroupForm";
import { renderComponent } from "../utils/dom";

export const groupManager = {

    renderAddContactToGroup() {
        const chatListContainer = document.querySelector('#chatListContainer');
        console.log('rendering AddContactToGroupView');
        renderComponent(AddContactToGroup, chatListContainer);

    },

    renderNewGroupForm() {
        const chatListContainer = document.querySelector('#chatListContainer');
        console.log('rendering AddContactToGroupView');
        renderComponent(NewGroupForm, chatListContainer);
    }
}