import Story from "../components/Story.js";
import view from "../utils/view.js";
import baseUrl from "../utils/baseUrl.js";

export default async function Stories(path) { // Getting path from router.on(route.path)
    // this also need await, very important!
    const stories = await getStories(path);
    const hasStories = stories.length > 0;

    // Checking if there is any story and display them.
    // We will need to pass the 'story' element to Story.js component
    // so we could format it before displaying.
    // Spread op. being used here to add to the list all the story object and its index
    view.innerHTML = `<div>
        ${hasStories ? stories.map((story, i) => Story({...story, index: i + 1})).join('') : 'No stories.'}
    </div>`;
}

// To display stories, first we need to get stories
async function getStories(path) {
    // Checks if current page is home page
    const isHomeRoute = path === '/';
    const isNewRoute = path === '/new';

    // Gets news article
    if(isHomeRoute) {
        path = '/news';
    } else if(isNewRoute) {
        path = '/newest'
    }
    // REMEMBER: await doesn't work without an async function
    const response = await fetch(`${baseUrl}${path}`);
    const stories = await response.json();
    return stories;
}

// https://node-hnapi.herokuapp.com

// / (Top) -> /news
// /new (New) -> /newest
// /ask (Ask) -> /ask
// /show (Show) -> /show 
