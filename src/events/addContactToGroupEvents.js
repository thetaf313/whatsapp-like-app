import { contactManager } from "../modules/contactManager";
import { conversationManager } from "../modules/conversationManager";
import { groupManager } from "../modules/groupManager";

export function initAddContactToGroupEvents() {
  const groupListView = document.querySelector("#addContactToGroup");
  const previousBtn = groupListView.querySelector("#previousBtn");

  // Return to ContactListView
  previousBtn.addEventListener('click', () => {
    contactManager.renderContactListView();
  });

  

 
}
