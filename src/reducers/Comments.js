import { LOAD_COMMENTS_TYPE, ADD_COMMENT_TYPE } from '../actions/Comments';

const initialState = {
    comments: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_COMMENTS_TYPE:
            return {...state, comments: action.payload};
        case ADD_COMMENT_TYPE:
            return {...state, comments: [...state.comments, action.payload]};
        default:
            return state
    }
}