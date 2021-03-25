import {
    ADD_POST_TYPE,
    TOGGLE_ADD_POST_FORM_TYPE,
    LOAD_POSTS_TYPE,
    INCREASE_VOTE_TYPE,
    DECREASE_VOTE_TYPE,
    FILTER_POSTS_TYPE
} from '../actions/Posts'

const initialState = {
    posts: [],
    displayAddPostForm: false,
    filterFor: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ADD_POST_FORM_TYPE:
            return { ...state, displayAddPostForm: !state.displayAddPostForm };
        case ADD_POST_TYPE:
            const newState = {
                ...state,
                posts: [...state.posts, action.payload]
            };
            return newState;
        case LOAD_POSTS_TYPE:
            return { ...state, posts: action.payload };
        case INCREASE_VOTE_TYPE:
            return { ...state, 
                posts: state.posts.map(p => action.payload.id === p.id ? action.payload : p) }
        case DECREASE_VOTE_TYPE:
            return { ...state,
                posts: state.posts.map(p => action.payload.id === p.id ? action.payload : p) }
        case FILTER_POSTS_TYPE:
            return {...state, 
                filterFor: action.payload
            }
        default:
            return state

    }
}