import { initNewGroupFormEvents } from "../events/NewGroupFormEvents";
import { LeftArrowIcon } from "./Icons";

export function NewGroupForm() {
  return {
    template: `
            <!-- Étape suivante : infos groupe -->
            <div id="newGroupForm" class="w-full h-full bg-[#111b21] text-white flex flex-col p-4 relative">
                <!-- Header -->
                <div class="flex items-center gap-4 mb-6">
                    <button id="previousBtn" class="text-gray-400 hover:text-white">
                    <!-- Icon retour (flèche) -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 19l-7-7 7-7" />
                    </svg>
                    </button>
                    <h1 class="text-lg font-medium">Nouveau groupe</h1>
                </div>

                <!-- Avatar du groupe -->
                <div class="flex justify-center mb-6">
                    <div class="relative w-40 h-40 bg-gray-700 rounded-full flex items-center justify-center">
                    <div class="text-center text-sm text-white">
                        <div class="flex justify-center mb-2">
                        <!-- Icône utilisateurs + caméra -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white"
                            class="opacity-70" viewBox="0 0 24 24">
                            <path
                            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4S8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4
                            v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                        </div>
                        <span class="text-xs">AJOUTER UNE<br>ICÔNE AU<br>GROUPE</span>
                        <!-- Icône appareil photo (overlay) -->
                        <div class="absolute inset-0 flex items-center justify-center">
                        <div
                            class="bg-black bg-opacity-50 rounded-full p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" class="w-6 h-6" viewBox="0 0 24 24">
                            <path
                                d="M12 5c-3.86 0-7 3.14-7 7a7 7 0 0014 0c0-3.86-3.14-7-7-7zm0 12c-2.76 0-5-2.24-5-5
                                s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
                            </svg>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

            <!-- Sujet du groupe -->
            <div class="flex items-center border-b border-green-500 px-2 py-1 mb-6">
                <input
                type="text"
                placeholder="Sujet du groupe (facultatif)"
                class="bg-transparent flex-1 outline-none text-white placeholder-gray-400"
                />
                <button class="text-gray-400 hover:text-white">
                <!-- Emoji icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
                    10-4.48 10-10S17.52 2 12 2zm0 18c-4.41
                    0-8-3.59-8-8s3.59-8 8-8
                    8 3.59 8 8-3.59 8-8 8zm4.5-6c0
                    2.5-4 3.5-4 3.5s-4-1-4-3.5V13h8v1zM9
                    10c.83 0 1.5-.67 1.5-1.5S9.83
                    7 9 7s-1.5.67-1.5 1.5S8.17
                    10 9 10zm6 0c.83 0 1.5-.67 1.5-1.5S15.83
                    7 15 7s-1.5.67-1.5 1.5S14.17
                    10 15 10z" />
                </svg>
                </button>
            </div>

            <!-- Options -->
            <div class="flex flex-col my-20">
                <div class="flex justify-between items-center flex-wrap mb-10 cursor-pointer">
                <span class="text-sm w-full">Messages éphémères</span>
                <span class="text-sm text-gray-400">Non</span>
                </div>
                <div class="flex justify-between items-center cursor-pointer">
                <span class="text-sm">Autorisations du groupe</span>
                <span class="text-sm text-gray-400">></span>
                </div>
            </div>

            <!-- Bouton de validation -->
            <button id="createGroupBtn"
                class="absolute bottom-6 left-1/2 -translate-x-1/2 bg-green-600 p-4 rounded-full shadow-lg hover:bg-green-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 13l4 4L19 7" />
                </svg>
            </button>
            </div>


        `,

    bindEvents: () => {
        console.log('NewGroupFormEvents applied.');
        initNewGroupFormEvents();
    },
  };
}
