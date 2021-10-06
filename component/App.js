import html from "../Redux/core.js";
import { connect } from "../Redux/store.js";
import Header from "./Header.js";
import TodoList from "./TodosList.js";
import Footer from "./Footer.js";

function App({ todos }) {
    return html`
        <section class="todoapp">
            ${Header()}
            ${todos.length > 0 && TodoList()}
            ${todos.length > 0 && Footer()}
        </section>
        <footer class="info">
            <p class="quote-footer-PC" >Double-click to edit a todo</p>
            <p class="quote-footer-Mobile">Tap to edit a todo</p>
            <p>Set Deadline is coming soon</p>
            <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
            <p>Created by <a href="https://www.facebook.com/profile.php?id=100008734652147" target="_blank">Trần Nhật Kỳ - Frlix Tran</a></p>
            <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
            <p>There is something wrong with the heading when you run this TodosList on Safari. I will fix it as soon as possible!</p>
        </footer>
    `;
}

export default connect()(App)