const initialState = {
    // Why is ini state an object?
    favourites: []
}

// Why is using reducer() good here?
function favouritesReducer(state = initialState, action) { // Provide fallback as empty object
    switch(action.type) {
        // Why do action.type's have to be uppercased?
        case 'ADD_FAVOURITE':
            const addedFavourite = action.payload.favourite; // Access object's name
            const favourites = [...state.favourites, addedFavourite] // Spread prev. fav items add new fav item 
            return {favourites} // Return state{favourites}
        case 'REMOVE_FAVOURITE':
            const removedFavourite = action.payload.favourite; // Same as above
            const favourites = state.favourties.filter(favourite => {
                favourite.id !== removedFavourite.id; // Return all but the removed fav item(s)
            });
            return {favourites};
        default: 
            return state;
    }
}

// Test
const action = {type: 'ADD_FAVOURITE', payload: {favourite: 'story1'}}