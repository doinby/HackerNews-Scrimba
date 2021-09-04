import view from "../utils/view.js";

export default function Stories(path) { // Getting path from router.on(route.path)
    view.innerHTML = `<div>${path}</div>`;
}