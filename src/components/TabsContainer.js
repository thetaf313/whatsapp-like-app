// TabsContainer component
export function TabsContainer() {
    return `
        <ul id="tabsContainer" class="flex gap-2 text-sm text-gray-400 py-2 mx-4">
            <li class="px-3 py-2 rounded-full bg-[#84838337] hover:bg-[#84838357] active">Toutes</li>
            <li class="px-3 py-2 rounded-full bg-[#84838337] hover:bg-[#84838357]">Non lues</li>
            <li class="px-3 py-2 rounded-full bg-[#84838337] hover:bg-[#84838357]">Favoris</li>
            <li class="px-3 py-2 rounded-full bg-[#84838337] hover:bg-[#84838357]">Groupes</li>
        </ul>
    `;
}