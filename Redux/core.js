const $ = document.querySelector.bind(document);

export default function html([first, ...strings], ...values) {
    return values.reduce((acc, cur) => acc.concat(cur, strings.shift()), [first])
    .filter(element => element && element !== true || element === 0)
    .join('');
}

export function createStore(reducer) {
    let state = reducer();
    const roots = new Map();

    function render() {
        for (const [root, component] of roots) {
            const output = component();
            root.innerHTML = output;
        }
        //Input
        const userOninput = $('.new-todo');
        const enterMobile = $('.enter-mobile');

        userOninput.oninput = function() {
            if (!enterMobile.classList.contains('user-oninput')) {
                enterMobile.classList.add('user-oninput');
            }
        }
        //Edit
    }

    return {
        attach(component, root) {
            roots.set(root, component);
            render();
        },
        connect(selector = state => state) {
            return component => (props, ...args) => 
                component(Object.assign({}, props, selector(state), ...args));
        },
        dispatch(action, ...args) {
            state = reducer(state, action, args);
            render();
        }
    }
}