import { AddContactToGroup } from "../components/AddContactToGroup";
import { renderComponent } from "../utils/dom";

export const groupManager = {

    renderAddContactToGroup() {
        const chatListContainer = document.querySelector('#chatListContainer');
        console.log('rendering AddContactToGroupView');
        renderComponent(AddContactToGroup, chatListContainer);

    }
}