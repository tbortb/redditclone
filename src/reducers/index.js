import { combineReducers } from 'redux'
import posts from './Posts'
import comments from './Comments'

export default combineReducers({
  posts, comments
})

export const selectCommentsForPostId = (state, id) => state.comments.comments.filter(c => c.post_id === id)
export const selectFilterdPosts = (state) => {
  const filterFor = state.posts.filterFor.toLowerCase();
  if(filterFor === ""){
    return state.posts.posts;
  }else{
    return state.posts.posts.filter(p => p.title.toLowerCase().includes(filterFor));
  }
}