export function GroupListView() {
  const props = { placeHolder: 'Rechercher un nom ou un numero'}
  return {
    template: `
            <div id="grouptListView" class="group-list-view w-full h-full flex flex-col">
                <div class="chat-list-header flex items-center gap-6 p-4 mb-3 relative">
                    <button id="previousBtn" class="fill-gray-500 hover:fill-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="" d="M11.707 5.293a1 1 0 0 1 0 1.414L7.414 11H19a1 1 0 1 1 0 2H7.414l4.293 4.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0"/></svg>
                    </button>
                    <h1 class="text-lg font-light">Ajouter des membres au groupe</h1>
                </div>
                    ${SearchBox(props)}
            
                <div class="content flex-1 mt-1 overflow-y-scroll">
                    ${ContactCreateLink()}
                    <div class="pl-6">
                        <h1 class="text-lg text-[#1a6e65] py-5">CONTACTS SUR WHATSAPP</h1>
                        <hr class="border-b border-[#8180803a] ml-14" />
                    </div>
            
                    <ul class="flex flex-col">
                        ${renderContactList(contacts)}
                    </ul>
                </div>
            </div>
        `,
    bindEvents: () => {
      console.log("Events for GroupListView applied.");
    },
  };
}
