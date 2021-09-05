import view from "../utils/view.js";

export default async function Stories(path) { // Getting path from router.on(route.path)
    // this also need await, very important!
    const stories = await getStories(path);
    const hasStories = stories.length > 0;

    // view.innerHTML = `<div>${path}</div>`;
    // stories.forEach(story => {
    //     view.innerHTML += `<div>${story.title}</div>`;
    // });

    // Checking if there is any story and display them
    view.innerHTML = `<div>
        ${hasStories ? stories.map(story => JSON.stringify(story)) : 'No stories.'}
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
    const response = await fetch(`https://node-hnapi.herokuapp.com${path}`);
    const stories = await response.json();
    return stories;
}

// https://node-hnapi.herokuapp.com

// / (Top) -> /news
// /new (New) -> /newest
// /ask (Ask) -> /ask
// /show (Show) -> /show 
