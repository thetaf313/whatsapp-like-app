import { getInitials } from "../utils/helper";

// ContactItem Component
export function ContactItem(contact=null) {
    const initials = contact ? getInitials(contact.name) : 'JD';
    return `
        <li class="flex items-center gap-4 hover:bg-[#8180803a] pl-4 cursor-pointer">
            ${contact?.avatar ? `
            <img src="${contact?.avatar}" alt="${contact?.name}" class="w-12 h-12" /> ` :
            `<span class="w-12 h-12 bg-gray-400 text-gray-900 rounded-full flex justify-center items-center">${initials}</span>` }
            <div class="flex flex-col border-b border-[#8180803a] py-4 flex-1">
                <span class="font-semibold">${contact?.name || 'John Doe'}</span>
                <span class="text-sm">${contact?.infos || "John's infos"}</span>
            </div>
        </li>
    `;
}