import { addBtnIcon, ellipseIcon, microPhoneIcon } from "./Icons";

export function ChatAreaView() {
    return {
        template: `
            <section id="content" class="w-full h-full bg-[#212e36] flex flex-col gap-1">
        <div
          id="contentHeader"
          class="flex justify-between bg-inherit px-2"
        >
          <div class="profile flex gap-2">
            <!-- <img
              src="/assets/user-group.svg"
              alt="A picture of a group"
              class="w-12 h-12 rounded-full bg-red-500"
            /> -->
            <span class="w-10 h-10 rounded-full bg-gray-600"></span>
            <div class="profile-info">
              <div id="title" class=""></div>
              <div id="description" class="text-sm"></div>
            </div>
          </div>
          <div id="actions" class="flex gap-2 p-1">
            <span
              id=""
              class="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer fill-gray-500"
            >
                ${ellipseIcon()}
            </span>
            
          </div>
        </div>

        <div id="contentBody" class="bg-[#2d542947] flex-1" style='background-image: url("assets/chat-wallpaper-img.jpg");'></div>

        <div id="contentFooter" class="flex justify-between items-center gap-2 p-2">
          <span class="fill-gray-600">${addBtnIcon()}</span>
          <input
            type="text"
            name=""
            id=""
            class="text-sm pl-2 py-2 flex-1 border border-gray-500 bg-[#2b3942] rounded-lg focus:outline-none"
          />
          <span
            id="sendBtn"
            class="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer fill-gray-600"
          >
            ${microPhoneIcon()}
          </span>
        </div>
      </section>
        `,
        bindEvents: () => {
            console.log('ChatAreaView events applied');
        }
    }
}