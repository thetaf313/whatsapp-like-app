import { initSidebarEvents } from "../events/sidebarEvents";
import { conversationManager } from "../modules/conversationManager";
import { store } from "../services/store";

// Sidebar Component View
export function Sidebar() {
  const user = store.getCurrentUser();
  return {
    template: `
             <section
        id="sidebar"
        class="w-[5rem] h-full bg-[#202C33] flex flex-col justify-between items-center"
      >
        <ul
          id="menu"
          class="side-menu list-none h-full flex flex-col gap-1 text-xs p-3" 
        >
          <li
            class="flex flex-col justify-center items-center rounded-full cursor-pointer w-12 h-12 active-menu"
          >
            <span class="fill-gray-400 relative">
                <strong class="badge bg-green-500 absolute -top-2 -right-2 w-5 h-5 rounded-full flex justify-center items-center text-md font-semibold">7</strong>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="" fill-rule="evenodd" d="M2.25 5A2.75 2.75 0 0 1 5 2.25h14A2.75 2.75 0 0 1 21.75 5v10A2.75 2.75 0 0 1 19 17.75H7.961c-.38 0-.739.173-.976.47l-2.33 2.913c-.798.996-2.405.433-2.405-.843zm4 7a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75M7 7.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/></svg>
            </span>
          </li>
          <li
            class="w-12 h-12 flex flex-col justify-center items-center rounded-full p-2 cursor-pointer"
          >
            
            <span class="fill-gray-400 relative">
              <strong class="badge bg-green-500 absolute top-0 -right-2 w-2 h-2 rounded-full"></strong>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 56 56"><path fill="" d="m50.923 21.002l.046.131l.171.566l.143.508l.061.232l.1.42a23.93 23.93 0 0 1-2.653 17.167a23.93 23.93 0 0 1-13.57 10.89l-.404.12l-.496.128l-.717.17a1.89 1.89 0 0 1-2.288-1.558a2.127 2.127 0 0 1 1.606-2.389l.577-.145q.54-.142.929-.273a19.93 19.93 0 0 0 10.899-8.943a19.93 19.93 0 0 0 2.292-13.923l-.069-.313l-.092-.365l-.115-.418l-.138-.47a2.135 2.135 0 0 1 1.26-2.602a1.894 1.894 0 0 1 2.458 1.067M7.385 19.92q.065.02.128.044A2.127 2.127 0 0 1 8.78 22.55q-.27.909-.39 1.513a19.93 19.93 0 0 0 2.295 13.91a19.93 19.93 0 0 0 10.911 8.947l.306.097l.174.05l.39.106l.694.171a2.135 2.135 0 0 1 1.623 2.393a1.894 1.894 0 0 1-2.152 1.594l-.138-.025l-.576-.135l-.51-.13l-.446-.125l-.2-.06A23.93 23.93 0 0 1 7.22 39.972a23.93 23.93 0 0 1-2.647-17.197l.077-.32l.1-.375l.194-.665l.076-.25a1.89 1.89 0 0 1 2.365-1.246M28.051 12c8.837 0 16 7.163 16 16s-7.163 16-16 16s-16-7.163-16-16s7.164-16 16-16m0 4c-6.627 0-12 5.373-12 12s5.373 12 12 12c6.628 0 12-5.373 12-12s-5.372-12-12-12m0-12a23.93 23.93 0 0 1 16.217 6.306l.239.227l.275.274l.31.322l.346.369a1.89 1.89 0 0 1-.205 2.76a2.127 2.127 0 0 1-2.873-.196q-.326-.345-.605-.617l-.35-.334l-.16-.143A19.93 19.93 0 0 0 28.051 8a19.93 19.93 0 0 0-13.204 4.976l-.114.102l-.253.24l-.287.285l-.495.515c-.76.809-2.014.9-2.883.21a1.894 1.894 0 0 1-.305-2.662l.09-.106l.405-.431l.368-.378q.262-.263.484-.465A23.93 23.93 0 0 1 28.05 4"/></svg>
            </span>
          </li>
          <li
            class="flex flex-col justify-center items-center rounded-full p-2 cursor-pointer w-12 h-12"
          >
            <span class="fill-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="" fill-rule="evenodd" d="M5.05 3.636a1 1 0 0 1 0 1.414a7 7 0 0 0 0 9.9a1 1 0 1 1-1.414 1.414a9 9 0 0 1 0-12.728a1 1 0 0 1 1.414 0m9.9 0a1 1 0 0 1 1.414 0a9 9 0 0 1 0 12.728a1 1 0 1 1-1.414-1.414a7 7 0 0 0 0-9.9a1 1 0 0 1 0-1.414M7.879 6.464a1 1 0 0 1 0 1.414a3 3 0 0 0 0 4.243a1 1 0 1 1-1.415 1.414a5 5 0 0 1 0-7.07a1 1 0 0 1 1.415 0m4.242 0a1 1 0 0 1 1.415 0a5 5 0 0 1 0 7.072a1 1 0 0 1-1.415-1.415a3 3 0 0 0 0-4.242a1 1 0 0 1 0-1.415M10 9a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1" clip-rule="evenodd"/></svg>
            </span>
          </li>
          <li
            class="flex flex-col justify-center items-center rounded-full p-2 cursor-pointer w-12 h-12"
          >
            <span class="fill-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="" d="M0 18v-1.575q0-1.075 1.1-1.75T4 14q.325 0 .625.013t.575.062q-.35.525-.525 1.1t-.175 1.2V18zm6 0v-1.625q0-.8.438-1.463t1.237-1.162T9.588 13T12 12.75q1.325 0 2.438.25t1.912.75t1.225 1.163t.425 1.462V18zm13.5 0v-1.625q0-.65-.162-1.225t-.488-1.075q.275-.05.563-.062T20 14q1.8 0 2.9.663t1.1 1.762V18zM8.125 16H15.9q-.25-.5-1.388-.875T12 14.75t-2.512.375T8.125 16M4 13q-.825 0-1.412-.587T2 11q0-.85.588-1.425T4 9q.85 0 1.425.575T6 11q0 .825-.575 1.413T4 13m16 0q-.825 0-1.412-.587T18 11q0-.85.588-1.425T20 9q.85 0 1.425.575T22 11q0 .825-.575 1.413T20 13m-8-1q-1.25 0-2.125-.875T9 9q0-1.275.875-2.137T12 6q1.275 0 2.138.863T15 9q0 1.25-.862 2.125T12 12m0-2q.425 0 .713-.288T13 9t-.288-.712T12 8t-.712.288T11 9t.288.713T12 10m0-1"/></svg>
            </span>
          </li>
          
        </ul>
        <ul class="flex flex-col justify-center items-center mb-4 gap-2">
            <li id="settings" class=" flex flex-col justify-center items-center rounded-full p-2 cursor-pointer" >
                <svg class="fill-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill=""><circle cx="12" cy="12" r="2" stroke="" stroke-width="2"/><path fill="" d="m5.399 5.88l.5-.867a1 1 0 0 0-1.234.186zM3.4 9.344l-.956-.295a1 1 0 0 0 .456 1.16zm-.002 5.311l-.5-.866a1 1 0 0 0-.455 1.162zm2 3.464l-.734.68a1 1 0 0 0 1.234.186zm4.6 2.655H9a1 1 0 0 0 .778.975zm4.001.002l.223.975a1 1 0 0 0 .777-.975zM18.6 18.12l-.5.866a1 1 0 0 0 1.233-.186zm1.998-3.466l.956.295a1 1 0 0 0-.456-1.16zm.002-5.311l.5.866a1 1 0 0 0 .455-1.162zm-2-3.465l.734-.679a1 1 0 0 0-1.234-.187zM14 3.225h1a1 1 0 0 0-.777-.975zm-4-.002l-.223-.975A1 1 0 0 0 9 3.223zm4 1.849h-1zm5 8.66l-.5.866zm-2 3.464l-.5.866zM5 13.732l.5.866zm2-6.928l-.5.866zM4.356 9.639a8 8 0 0 1 1.776-3.08L4.665 5.2a10 10 0 0 0-2.22 3.85zM5.072 16a8 8 0 0 1-.718-1.64l-1.91.592c.217.701.515 1.388.896 2.048zm1.06 1.441A8 8 0 0 1 5.073 16L3.34 17c.38.66.827 1.261 1.325 1.8zm7.646 2.361a8 8 0 0 1-3.556-.002l-.445 1.95a10 10 0 0 0 4.446.002zm5.866-5.441a8 8 0 0 1-1.776 3.08l1.467 1.36a10 10 0 0 0 2.22-3.85zM18.928 8c.306.53.545 1.08.718 1.64l1.91-.592A10 10 0 0 0 20.66 7zm-1.06-1.441c.397.43.754.91 1.06 1.441l1.732-1a10 10 0 0 0-1.325-1.8zm-7.646-2.361a8 8 0 0 1 3.556.002l.444-1.95a10 10 0 0 0-4.445-.002zm.778.874v-1.85H9v1.85zm-3.5.866l-1.601-.925l-1 1.732l1.6.925zm-3 6.928l-1.601.924l1 1.732l1.6-.924zm1-3.464l-1.6-.923l-1 1.732l1.6.923zM11 20.775v-1.847H9v1.847zM6.5 16.33l-1.601.925l1 1.732l1.6-.925zm12.601.925L17.5 16.33l-1 1.732l1.601.925zM15 20.777v-1.849h-2v1.85zm5.101-12.3l-1.601.925l1 1.732l1.601-.925zm.998 5.312l-1.599-.923l-1 1.732l1.6.923zM15 5.072V3.225h-2v1.847zm3.101-.059l-1.601.925l1 1.732l1.601-.925zM13 5.072c0 2.31 2.5 3.753 4.5 2.598l-1-1.732a1 1 0 0 1-1.5-.866zm5.5 4.33c-2 1.155-2 4.041 0 5.196l1-1.732a1 1 0 0 1 0-1.732zm-1 6.928c-2-1.154-4.5.289-4.5 2.598h2a1 1 0 0 1 1.5-.866zM11 18.928c0-2.31-2.5-3.753-4.5-2.598l1 1.732a1 1 0 0 1 1.5.866zm-5.5-4.33c2-1.155 2-4.041 0-5.196l-1 1.732a1 1 0 0 1 0 1.732zM9 5.072a1 1 0 0 1-1.5.866l-1 1.732c2 1.154 4.5-.289 4.5-2.598z"/></g></svg>
            </li>
            <li class="flex flex-col justify-center items-center rounded-full p-1 cursor-pointer mt-2">
            ${
              user.avatar
                ? `
                    <img id="sideProfilePic" src="/assets/${user.avatar}" alt="${user.profile}" class="w-10 h-10 rounded-full cursor-pointer" /> `
                : `
                    <span id="sideProfilePic" class="flex justify-center items-center w-10 h-10 rounded-full bg-gray-200 text-sm cursor-pointer">${user.profile}</span>`
            }
            </li>
        </ul>
      </section>
        `,
    bindEvents: () => {
      console.log("events for sidebar applied");
      initSidebarEvents();
      conversationManager.renderChatListView();
    },
  };
}
