import { store } from "../services/store";
import { getInitials } from "../utils/helper";

export function TagContact(contact) {
  const user = store.users.find((u) => u.id === contact.id);
  console.log(user);
  const initials = contact ? getInitials(contact?.name) : "JD";

  return `
        <div class="tag bg-[#93929242] px-1 py-1 rounded-full flex items-center gap-2" data-id="${contact?.id}">
         ${contact?.avatar ? `
        <img src="${
          contact?.avatar || "https://via.placeholder.com/30"
        }" class="w-6 h-6 rounded-full" /> ` :
            `<span class="w-6 h-6 bg-gray-400 text-gray-900 text-xs rounded-full flex justify-center items-center">${initials}</span>` }
        <span class="text-xs">${contact?.name}</span>
        <button class="remove-tag p-1 text-gray-500 text-xs hover:bg-white font-bold rounded-full w-4 h-4 flex items-center justify-center">x</button>
      </div>
    `;
}
