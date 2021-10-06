import { attach } from "../Redux/store.js";
import App from "../component/App.js";

const $ = document.querySelector.bind(document);
attach(App, $('#root'));