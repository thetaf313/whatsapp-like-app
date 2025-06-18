import { conversationManager } from "../modules/conversationManager";
import { groupManager } from "../modules/groupManager";
import { chatService } from "../services/chatService";
import { contactService } from "../services/contactService";
import { groupService } from "../services/groupService";
import { store } from "../services/store";

export function initNewGroupFormEvents() {
  const newGroupForm = document.querySelector("#newGroupForm");
  const previousBtn = newGroupForm.querySelector("#previousBtn");
  const createGroupBtn = newGroupForm.querySelector("#createGroupBtn");
  const input = newGroupForm.querySelector("input[type=text]");

  previousBtn.addEventListener("click", () => {
    groupManager.renderAddContactToGroup();
  });

  createGroupBtn.addEventListener("click", () => {
    console.log("createGroupBtn clicked");

    const currentUser = store.getCurrentUser();
    const creatorId = currentUser.id;
    let groupName = input.value.trim();

    // Récupérer les IDs des membres sélectionnés
    const selectedIds = [...store.selectedGroupMembers];

    // Ajouter le créateur s'il n'est pas déjà membre
    if (!selectedIds.includes(creatorId)) {
      selectedIds.push(creatorId);
    }

    // Si aucun nom n'est fourni, générer un nom avec les prénoms
    if (!groupName) {
      const contactNames = selectedIds
        .map((id) => {
          if (id === creatorId) return currentUser.name;
          const contact = store.contacts.find((c) => c.id === id);
          return contact?.name;
        })
        .filter(Boolean); // retire les noms non trouvés
      groupName = contactNames.join(", ");
    }

    groupService
      .createGroup({
        name: groupName,
        creatorId,
        members: selectedIds,
      })
      .then(({ group, chat }) => {
        console.log("Groupe créé :", group);
        console.log("Chat groupe lié :", chat);
        store.groups.push(group);
        store.chats.push(chat);

        conversationManager.renderChatListView();
        // Tu peux ici re-render la vue de la liste de discussions
        // Exemple : router.loadChatListView();
      })
      .catch((err) => {
        console.error(err.message);
      });
  });
}
