import { SearchIcon } from "./Icons";

// SearchBox Component
export function SearchBox(props = {}) {
  console.log(props?.id)
    return `
        <div
          class="search flex justify-center items-center gap-2 bg-[#222E35] rounded-xl px-4 mx-4"
        >
          ${props?.icon ? props?.icon : SearchIcon()}
          <input
            type="text"
            id="${props?.id ? props?.id : 'searchBox'}"
            class="flex-1 p-[0.5rem] bg-inherit border-none text-white focus:outline-none"
            placeholder="${props?.placeHolder ? props?.placeHolder : 'Rechercher'}"
          />
        </div>
    `;
}