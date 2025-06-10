import { App } from "../components/App";
import { LoginForm } from "../components/auth/LoginForm";
import { renderComponent } from "../utils/dom";
import { isAuthenticated } from "./authManager";

export function initializeUI() {
  const body = document.querySelector("body");
  // const app = document.getElementById("app");
  // app.innerHTML = "<h1>Hello Vite!</h1>";

  console.log("UI initialized");
  if (isAuthenticated()) {
    console.log("User is authenticated");
    renderComponent(App, body);
  } else {
    console.log("User is not authenticated");
    renderComponent(LoginForm, body);
  }
}
