const posts = [
  { id: 1, content: "Post 1 content" },
  { id: 2, content: "Post 2 content" },
  { id: 3, content: "Post 3 content" },
];

function createPost(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Post ${post.id} created`);
      resolve(post);
    }, 1000);
  });
}

const Akshay = {
  id: 123,
  lastActivityTime: new Date(),
};

function updateLastUserActivityTime(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`USER last activity time ${time}`);
      resolve();
    }, 1000);
  });
}

function deletePost() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const deletedPost = posts.pop();
      console.log(`Post ${deletedPost.id} deleted`);
      resolve();
    }, 1000);
  });
}



async function handlePost(newPost) {
  console.log(`Before Creating post ${newPost.id}, user lastActivityTime ${Akshay.lastActivityTime}`);
  const [createdPost] = await Promise.all([
    createPost(newPost),
    updateLastUserActivityTime(Akshay.lastActivityTime),
  ]);

  posts.push(createdPost);
   console.log("After Creating post");
   console.log("posts", posts);

  await deletePost();
  console.log("After Deleting last post");
  console.log("posts", posts);

}

handlePost({ id: 4, content: "Post 4 content" });
