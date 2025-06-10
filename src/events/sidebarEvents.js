// sidebar events
export function initSidebarEvents() {
  document.querySelectorAll("ul li").forEach((li) => {
    li.addEventListener("click", () => {
      const label = li.innerText.trim().toLowerCase();
    //   loadView(label);

      document
        .querySelectorAll("ul li")
        .forEach((el) => el.classList.remove("active-menu"));
      li.classList.add("active-menu");
    });
  });
}
