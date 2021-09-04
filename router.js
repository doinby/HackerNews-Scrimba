// Importing should be at the top
import Stories from './pages/stories.js'

// Refering to doc to understand deployment syntaxes
const router = new Navigo(null, true, '#');

// Creating an app to handle rerouting webpages on header 
export default class RouterHandler { // Export to use in app.js
    constructor() {
        this.createRoute();
    }

    createRoute() {
        const routes = [
          { path: "/", page: Stories },
          { path: "/new", page: Stories },
          { path: "/ask", page: Stories },
          { path: "/show", page: Stories }
        ];

        routes.forEach(({path, page}) => { // Object destructuring for easy access and readibility
            // On a given route path, tells the app what to display
            router.on(path, () => {
                // Passing the route's paths to stories.js to display 
                // header correspondant to path (that was being passed)
                page(path); // First route.page is Stories
            }).resolve();
        })
    }
}