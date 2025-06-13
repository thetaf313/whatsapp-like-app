// ChatItem Component
export function ChatItem() {
  return `
        <div class="flex items-center gap-4 min-h-[72px] px-4 py-2 hover:bg-[#8e8e8e28] cursor-pointer">
                <div
                  class="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                  style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZX7BqetLZ4ZQyIbWbDNdWU0OcgAztglsstXzwIgNkz9U0-4xMSUARzfVz3UMFn11X9Ryz0bKjtvUO0V70Hyin5sTPevE_N_-6rxCch4rPBCadF5k1UitojhR_dkwMqWWojhZwF3jI9Qg_aCW5R_UhBN741vW0Hg7pvIK_dXh8scmos6-CmtF0ttiCFPqCcsJAFZaPzS55AtuM0elogli-8K2h1mWr_A7N1_fYeimZTIlrJiqHMZ0M0cSvh2qGkS5b_pDKAesvEdo");'
                ></div>
                <div class="flex flex-wrap flex-1">
                    <div class="flex justify-between items-center w-full">
                        <span class="text-[#cfdfe8]">Sophia Clark</span>
                        <span class="text-xs text-green-500">12:57</span>
                    </div>
                    <div class="flex justify-between items-center w-full">
                        <span class="text-sm text-[#cfdfe8]">Hey, how are you?</span>
                        <span class="w-5 h-5 text-xs text-gray-900 bg-green-500 rounded-full flex justify-center items-center">1</span>
                    </div>
                </div>
            </div>
    `;
}
