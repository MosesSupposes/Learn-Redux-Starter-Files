export default function posts(state=[], action) {
    switch(action.type) {
        case 'INCREMENT_LIKES':
            const i = action.payload
            return [
                ...state.slice(0, i), // all posts before the one we are updating
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1) // all posts after the one we are updating
            ]
        default: 
            return state
    }
}

