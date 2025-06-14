import { renderComponent } from "../utils/dom";
import { ChatAreaContainer } from "./ChatAreaContainer";
import { ChatListContainer } from "./ChatListContainer";
import { Sidebar } from "./Sidebar";

// App Component
export function App() {

    return {
        template: `
            <div id="app" class="w-[90%] h-[92%] flex border-2 rounded-lg">
                ${Sidebar().template}
                ${ChatListContainer().template}
                ${ChatAreaContainer().template}
            </div>
        `,
        bindEvents: () => {
            Sidebar().bindEvents();
            // const app = document.querySelector('#app');
            // renderComponent(Sidebar, app);
            // renderComponent(ChatListContainer, app);
        }
    }
}