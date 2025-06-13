import { initAddContactFormEvents } from "../events/AddContactFormEvents";
import { arrowReloadIcon, chevronRightIcon, confirmIcon, LeftArrowIcon, phoneIcon, userIcon } from "./Icons";

// AddContactForm Component
export function AddContactForm() {
    return {
        template: `
            <div id="addContactFormView" class="p-4">
                <div class="header flex gap-3">
                    <span id="previousBtn" class="fill-gray-400 hover:fill-gray-600 cursor-pointer">${LeftArrowIcon()}</span>
                    <h2 class="text-xl text-gray-500 font-light mb-4">Nouveau contact</h2>
                </div>

                <form id="addContactForm" class="flex flex-col items-center gap-4 p-4">
                    <div class="flex gap-3 items-center w-full m-4">
                        <span class="fill-gray-500">${userIcon()}</span>
                        <div class="flex-1">
                        <input type="text" id="firstName" placeholder="Prenom"
                        class="p-2 border-b-2 border-gray-300 focus:border-[#00a884] w-full focus:outline-none bg-inherit" autocomplete="no" />
                        <div class="error-message text-red-500 text-sm mt-1" data-error-for="firstName"></div>
                        </div>
                    </div>
      
                    <div class="flex gap-3 items-center w-full m-4">
                        <span class="fill-gray-500 invisible">${userIcon()}</span>
                        <div class="flex-1">
                        <input type="text" id="lastName" placeholder="Nom"
                        class="p-2 border-b-2 border-gray-300 focus:border-[#00a884] w-full focus:outline-none bg-inherit" autocomplete="no" />
                        <div class="error-message text-red-500 text-sm mt-1" data-error-for="lastName"></div>
                        </div>
                    </div>
      
                    <div class="flex gap-3 items-center w-full m-4">
                        <span class="fill-gray-500">${phoneIcon()}</span>
                        <div class="flex-1">
                        <input type="text" id="phoneNumber" placeholder="Numero"
                        class="p-2 border-b-2 border-gray-300 focus:border-[#00a884] w-full focus:outline-none bg-inherit" />
                        <div class="error-message text-red-500 text-sm mt-1" data-error-for="phoneNumber"></div>
                        </div>
                    </div>

                    <div class="cursor-pointer flex items-center gap-2 text-gray-400">
                        <span class="fill-gray-500">${arrowReloadIcon()}</span>
                        <div class="flex flex-col">
                            <span class="text-sm">Synchroniser le contact sur le téléphone</span>
                            <span class="text-xs"> Ce contact sera ajouté au carnet d'adresses de votre téléphone</span>
                        </div>
                        <div class="w-12 h-6 flex items-center rounded-full border-2 border-gray-500 bg-gray-800 pl-1">
                            <span class="w-4 h-4 rounded-full bg-gray-100"></span>
                        </div>

                    </div>
     

                    <button id="addContactBtn" type="button"
                        class="w-12 h-12 rounded-full flex justify-center items-center text-gray-500 p-2 bg-[#00a884] hover:bg-[#00a884] fill-gray-900 transition m-5 cursor-pointer" >
                        ${chevronRightIcon()}
                    </button>
            </form>
            <div id="addContactMessage" class="text-sm mt-2"></div>
        </div>
        `,

        bindEvents: () => {
            console.log('AddContactForm events applied');
            initAddContactFormEvents();
        }
    }
}