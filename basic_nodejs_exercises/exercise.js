const API = 'https://jsonplaceholder.typicode.com/';
// helper function
function fetchAPI(dataType) {
  return fetch(`${API}` + dataType)
}

// 1. Use this Fake JSON API: https://jsonplaceholder.typicode.com/
// 2. Get data from all users from API above. You will get a list of 10 users.
// 3. Get all the posts and comments from the API. Map the data with the users array. The data format should be like this:

const [userRes, postRes, commentRes] = await Promise.all([
  fetchAPI('users'),
  fetchAPI('posts'),
  fetchAPI('comments')
]);

const [users, posts, comments] = await Promise.all([
  userRes.json(),
  postRes.json(),
  commentRes.json()
]);

const newUserData = users.map(user => {
  const userPosts = posts.filter(post => post.userId == user.id);
  const userComments = comments.filter(comment => userPosts.some(post => post.id == comment.postId));

  return {
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    comments: userComments,
    posts: userPosts,
  };
});
console.log(newUserData);


// 4
const filteredUserComments = newUserData.filter(user => user.comments.length > 3);
console.log(filteredUserComments);

// 5. Reformat the data with the count of comments and posts
const newFormatedUsers = newUserData.map(user => {
  const postsCount = user.posts.length;
  const commentsCount = user.comments.length;
  return {
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    postsCount,
    commentsCount
  }
});
console.log(newFormatedUsers);

// 6. Who is the user with the most comments/posts?
const currentMax = newFormatedUsers[0];
const mostPosts = newFormatedUsers.reduce((currentMax, currentUser) => {
  return currentUser.postsCounts > currentMax.postsCount ? currentUser : currentMax;
}, newFormatedUsers[0]);
console.log(mostPosts);

const mostComments = newFormatedUsers.reduce((currentMax, currentUser) => {
  return currentUser.commentsCount > currentMax.commentsCount ? currentUser : currentMax;
})
console.log(mostComments);

// 7. Sort the list of users by the postsCount value descending?
const sortedUsers = newFormatedUsers.toSorted((prevUser, nextUser) => {
  return prevUser.postsCount === nextUser.postsCount ? 0 : prevUser.postsCount > nextUser.postsCount ? -1 : 1
});
console.log(sortedUsers);

// 8. Get the post with ID of 1 via API request, at the same time get comments for post ID of 1 via another API request. Merge the post data with format:
const getFirstPostData = async () => {
  const [firstPostRes, firstPostCommentsRes] = await Promise.all([
    fetchAPI('/posts/1'),
    fetchAPI('/posts/1/comments')
  ]);

  const [firstPostData, firstPostCommentsData] = await Promise.all([
    firstPostRes.json(),
    firstPostCommentsRes.json()
  ]);

  return {
    firstPostData,
    comments: firstPostCommentsData
  }
}

(async () => {
  const result = await getFirstPostData();
  console.log(result);
})();