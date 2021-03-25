export const getPostsEndpoint = "http://localhost:8082/api/posts";
export const increaseVotesEndpoint = id => `http://localhost:8082/api/posts/votes/increase/${id}`;
export const decreaseVotesEndpoint = id => `http://localhost:8082/api/posts/votes/decrease/${id}`;
export const getCommentsEndpoint = "http://localhost:8082/api/comments";