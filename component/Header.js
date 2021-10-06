import html from "../Redux/core.js";

function Header() {
    return html`
        <header class="header">
            <h1>
                <div class="stage">
                    <div class="layer"></div>
                    <div class="layer"></div>
                    <div class="layer"></div>
                    <div class="layer"></div>
                    <div class="layer"></div>
                    <div class="layer"></div>
                    <div class="layer"></div>
                    <div class="layer"></div>
                    <div class="layer"></div>
                    <div class="layer"></div>
                    <div class="layer"></div>
                    <div class="layer"></div>
                    <div class="layer"></div>
                    <div class="layer"></div>
                    <div class="layer"></div>
                    <div class="layer"></div>
                    <div class="layer"></div>
                    <div class="layer"></div>
                    <div class="layer"></div>
                    <div class="layer"></div>
                </div>
            </h1>
            <input 
                class="new-todo" 
                placeholder="What needs to be done?" 
                autofocus 
                onkeyup="event.keyCode === 13 && dispatch('add', this.value)"
            >
            <button class="enter-mobile" onclick="dispatch('add', document.querySelector('.new-todo').value)">
                <i class="far fa-arrow-alt-circle-right"></i>
            </button>
        </header>
    `;
}

export default Header