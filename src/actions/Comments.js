import { createThunkAction } from '../Helpers'
import { getCommentsEndpoint } from '../ApiEndpoints'

export const LOAD_COMMENTS_TYPE = 'LOAD_COMMENTS'
export const loadComments = data => createThunkAction(LOAD_COMMENTS_TYPE, getCommentsEndpoint, data)

export const ADD_COMMENT_TYPE = 'ADD_COMMENT'
export const addComment = newComment => {
    const data = {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      }
    return createThunkAction(ADD_COMMENT_TYPE, getCommentsEndpoint, data);
}