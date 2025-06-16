import { store } from "../services/store";
import { getInitials } from "../utils/helper";

// ContactItem Component
export function ContactItem(contact={}) {
    console.log(contact);
    const contactInfos = store.users.filter(user => user.id === contact.id)[0];
    const initials = contact ? getInitials(contact?.name) : 'JD';
    return `
        <li class="contact-item flex items-center gap-4 hover:bg-[#8180803a] pl-4 cursor-pointer" data-id="${contact?.id}">
            ${contact?.avatar ? `
            <img src="${contact?.avatar}" alt="${contact?.name}" class="w-12 h-12" /> ` :
            `<span class="w-12 h-12 bg-gray-400 text-gray-900 rounded-full flex justify-center items-center">${initials}</span>` }
            <div class="flex flex-col border-b border-[#8180803a] py-4 flex-1">
                <span class="font-semibold">${store.getCurrentUser().id === contact.id ? contact?.name + " (Vous)" || 'Moi' : contact?.name || ''}</span>
                <span class="text-sm">${store.getCurrentUser().id === contact.id ? "Envoyez-vous un message" : contactInfos?.username || "J'utilise whatsapp."}</span>
            </div>
        </li>
    `;
}