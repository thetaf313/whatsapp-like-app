// helper functions for the application


export function clearErrors() {
  const errorFields = document.querySelectorAll("[data-error-for]");
  errorFields.forEach(div => {
    div.textContent = "";
  });
}

export function showError(field, message) {
  const errorDiv = document.querySelector(`[data-error-for="${field}"]`);
  if (errorDiv) {
    errorDiv.textContent = message;
  }
}



export function getInitials(name) {
  return name.split(" ").map(n => n[0]).join("").toUpperCase();
}

export function createAvatar(name, color = "#ccc") {
  const initials = getInitials(name);
  return `
    <div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style="background:${color}">
      ${initials}
    </div>`;
}

export function randomColor() {
  const colors = ["#F87171", "#60A5FA", "#34D399", "#FBBF24"];
  return colors[Math.floor(Math.random() * colors.length)];
}