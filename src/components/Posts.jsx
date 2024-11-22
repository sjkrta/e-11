const Posts = ({ posts, loading, error }) => {
  return (
    <div>
      <h1>POSTS:</h1>

      {loading && <div>Getting data..</div>}

      {error && <div>{error.message || "Failed to load posts.."}</div>}

      {posts &&
        posts.posts.map((posts) => (
          <div key={posts.id}>{posts.title}</div>
        ))}
    </div>
  );
};

export default Posts;
