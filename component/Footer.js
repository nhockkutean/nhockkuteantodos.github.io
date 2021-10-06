import html from "../Redux/core.js";
import { connect } from "../Redux/store.js";

function Footer({ todos, filter, filters }) {
    return html`
        <footer class="footer">
            <span class="todo-count todo-count-PC">
                <strong>${todos.map(filters.active).length}</strong> item left
            </span>
            <span class="todo-count todo-count-Mobile">
                --- <strong>${todos.map(filters.active).length}</strong> item left ---
            </span>
            <ul class="filters">
                ${Object.keys(filters).map(type => html`
                    <li>
                        <a class="${filter === type && 'selected'}" href="#" onclick="dispatch('switchFilter', '${type}')">
                            ${type[0].toUpperCase() + type.slice(1)}
                        </a>
                    </li>
                `)}
            </ul>
            ${todos.filter(filters.completed).length > 0 && 
                html`
                    <button class="clear-completed" onclick="dispatch('clearCompleted')">Clear completed</button>
                    <button class="clear-completed-mobile" onclick="dispatch('clearCompleted')"><i class="far fa-trash-alt"></i></button>
                `
            }
        </footer>
    `;
}

export default connect()(Footer)