import { NewCommunityIcon, NewContactIcon, NewGroupIcon } from "./Icons";

// ContactCreateLink Component
export function ContactCreateLink() {
    return `
        <ul class="">
            <li id="newGroupBtn" class="flex items-center gap-4 hover:bg-[#8180803a] pl-4 cursor-pointer">
                <span class="fill-white bg-[#00a984] rounded-full p-2">${NewGroupIcon()}</span>
                <span class="text-lg border-b border-[#8180803a] py-5 flex-1">Nouveau groupe</span>
            </li>
            <li id="newContactBtn" class="flex items-center gap-4 hover:bg-[#8180803a] pl-4 cursor-pointer">
                <span class="fill-white bg-[#00a984] rounded-full p-2">${NewContactIcon()}</span>
                <span class="text-lg border-b border-[#8180803a] py-5 flex-1">Nouveau contact</span>
            </li>
            <li id="newCommunityBtn" class="flex items-center gap-4 hover:bg-[#8180803a] pl-4 cursor-pointer">
                <span class="fill-white bg-[#00a984] rounded-full p-2">${NewCommunityIcon()}</span>
                <span class="text-lg border-b border-[#8180803a] py-5 flex-1">Nouvelle communaute</span>
            </li>
        </ul>
    `
}