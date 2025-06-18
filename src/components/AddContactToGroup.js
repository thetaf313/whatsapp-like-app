import { initAddContactToGroupEvents } from "../events/addContactToGroupEvents";
import { contactService } from "../services/contactService";
import { ContactItem } from "./ContactItem";
import { rightArrowIcon } from "./Icons";
import { SearchBox } from "./SearchBox";
import { TagContact } from "./TagContact";

function renderContactList(contacts = []) {
  return contacts.map((contact) => ContactItem(contact)).join("");
}

function renderTagContact(contacts =[]) {
    return contacts.map((contact) => TagContact(contact)).join("");
}

export function AddContactToGroup() {
  const props = { id: "contactSearchInput", placeHolder: "Rechercher un nom ou un numero" };
  const contacts = [...contactService.getContacts()];
  //   const currentUser = store.getCurrentUser();
  //   currentUser.name = currentUser.firstName + ' ' + currentUser.lastName;
  //   console.log(currentUser);
  //   contacts.unshift(currentUser);
  console.log(contacts);
  return {
    template: `
                <div id="addContactToGroup" class="add-contact-to-group w-full h-full flex flex-col relative">
                    <div class="chat-list-header flex items-center gap-6 p-4 mb-3 relative">
                        <button id="previousBtn" class="fill-gray-500 hover:fill-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="" d="M11.707 5.293a1 1 0 0 1 0 1.414L7.414 11H19a1 1 0 1 1 0 2H7.414l4.293 4.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0"/></svg>
                        </button>
                        <h1 class="text-lg font-light">Rechercher un nom ou un numero</h1>
                    </div>
                    ${SearchBox(props)}

                    <!-- Tags des contacts sélectionnés -->
                    <div id="tagsContainer" class="flex flex-wrap gap-2 p-4 max-h-56">
                        <!-- tags contacts sélectionnés -->
                        
                    </div>
    
                    <div class="content flex-1 mt-1 overflow-y-scroll">
            
                        <ul class="contact-list flex flex-col">
                            ${renderContactList(contacts)}
                        </ul>
                    </div>

                    <div class="actions w-full absolute bottom-0 flex justify-center z-10 bg-inherit p-4 invisible">
                        <span id="nextStepBtn" class="p-4 bg-green-600 rounded-full fill-white cursor-pointer">${rightArrowIcon()}</span>
                    </div>
                </div>
            `,
    bindEvents: () => {
      console.log("AddContactToGroupEvents events applied");
      initAddContactToGroupEvents();
    },
  };
}
