import { conversationManager } from "../modules/conversationManager";

// sidebar events
export function initSidebarEvents() {
  document.addEventListener('click', (e) => {
    const menuItem = e.target.closest('.side-menu .menu-item');
    if(!menuItem) return;

    document.querySelectorAll('.side-menu .menu-item').forEach((item) => item.classList.remove('active-menu'));
    menuItem.classList.add('active-menu');
    const section = menuItem.dataset.section;
    handleSectionChange(section);
  })
  // document.querySelectorAll("ul li").forEach((li) => {
  //   li.addEventListener("click", () => {
  //     const label = li.innerText.trim().toLowerCase();
  //   //   loadView(label);

  //     document
  //       .querySelectorAll("ul li")
  //       .forEach((el) => el.classList.remove("active-menu"));
  //     li.classList.add("active-menu");
  //   });
  // });
}

function handleSectionChange(section) {
  switch (section) {
    case 'chats':
      console.log('chats');
      conversationManager.renderChatListView();
      break;
    case 'status':
      console.log('status');
      break;
    case 'channel':
      console.log('channel');
      break;
    case 'community':
      console.log('community');
      break;
    case 'settings':
      console.log('settings');
      break;
    case 'profile':
      console.log('profile');
      break;
    default:
      console.log('unknown section');
      break;
  }
}