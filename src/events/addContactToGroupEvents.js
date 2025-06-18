import { ContactItem } from "../components/ContactItem";
import { TagContact } from "../components/TagContact";
import { contactManager } from "../modules/contactManager";
import { groupManager } from "../modules/groupManager";
import { contactService } from "../services/contactService";
import { store } from "../services/store";

export function initAddContactToGroupEvents() {
  const addContactToGroup = document.querySelector("#addContactToGroup");
  const previousBtn = addContactToGroup.querySelector("#previousBtn");
  const tagsContainer = addContactToGroup.querySelector("#tagsContainer");
  const contactList = addContactToGroup.querySelector(".contact-list");
  const searchInput = addContactToGroup.querySelector("#contactSearchInput");
  const actions = addContactToGroup.querySelector('.actions');
  const nextStepBtn = addContactToGroup.querySelector('#nextStepBtn');

  let selectedContacts = [];

  /**
   * Affiche dynamiquement la liste des contacts selon la recherche
   * et exclut les contacts déjà sélectionnés.
   */
  function renderContactList(search = "") {
    const normalized = search.trim().toLowerCase();

    const filteredContacts = contactService
      .getContacts()
      .filter((c) => !selectedContacts.includes(c.id))
      .filter(
        (c) =>
          c.name.toLowerCase().includes(normalized)
          // c.lastname.toLowerCase().includes(normalized) ||
          // c.phone.includes(normalized)
      )
      .sort((a, b) => a.name.localeCompare(b.name));

    contactList.innerHTML = filteredContacts.map(ContactItem).join("");

    contactList.querySelectorAll(".contact-item").forEach((item) => {
      item.addEventListener("click", () => {
        const contactId = item.dataset.id;
        if (!selectedContacts.includes(contactId)) {
          selectedContacts.push(contactId);
          renderTags();
          renderContactList(searchInput.value);
          store.selectedGroupMembers = selectedContacts;
        }
        if (selectedContacts) actions.classList.remove('invisible');
      });
    });
  }

  /**
   * Affiche les tags des contacts sélectionnés et gère leur suppression.
   */
  function renderTags() {
    tagsContainer.innerHTML = selectedContacts
      .map((id) => {
        const contact = contactService.getContacts().find((c) => c.id === id);
        return TagContact(contact);
      })
      .join("");

    tagsContainer.querySelectorAll(".remove-tag").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const tag = e.target.closest(".tag");
        const id = tag.dataset.id;
        selectedContacts = selectedContacts.filter((cid) => cid !== id);
        renderTags();
        renderContactList(searchInput.value); // Appliquer le filtre actif
      });
    });
  }

  /**
   * Bouton retour vers la vue précédente
   */
  previousBtn.addEventListener("click", () => {
    contactManager.renderContactListView();
  });

  /**
   * Filtrage dynamique sur l'input de recherche
   */
  searchInput.addEventListener("input", (e) => {
    renderContactList(e.target.value);
  });

  nextStepBtn.addEventListener('click', () => {
    console.log('next step clicked');
    groupManager.renderNewGroupForm();
  })

  // Initial rendering
  renderContactList();
}
