import { createAction, createThunkAction } from '../Helpers'
import { getPostsEndpoint, increaseVotesEndpoint, decreaseVotesEndpoint } from '../ApiEndpoints'

export const TOGGLE_ADD_POST_FORM_TYPE = 'TOGGLE_ADD_POST_FORM';
export const toggleAddPostForm = data => createAction(TOGGLE_ADD_POST_FORM_TYPE, data)

export const LOAD_POSTS_TYPE = 'LOAD_POSTS';
export const loadPosts = data => createThunkAction(LOAD_POSTS_TYPE, getPostsEndpoint, data)

export const ADD_POST_TYPE = 'ADD_POST';
export const addPost = data => {
    const sendObject = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      }
    return createThunkAction(ADD_POST_TYPE, getPostsEndpoint, sendObject);
}

export const INCREASE_VOTE_TYPE = "INCREASE_VOTE";
export const increaseVote = id => createThunkAction(INCREASE_VOTE_TYPE, increaseVotesEndpoint(id))

export const DECREASE_VOTE_TYPE = "DECREASE_VOTE";
export const decreaseVote = id => createThunkAction(INCREASE_VOTE_TYPE, decreaseVotesEndpoint(id))

export const FILTER_POSTS_TYPE = "FILTER_POSTS";
export const filterPosts = data => createAction("FILTER_POSTS", data)