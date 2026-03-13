import PostItemSmall from "./PostItemSmall";

function PostList() {
  /* sätt in const = null med sql värden */
  /* const posts = värderna; */
  return (
    <ul>
      {posts?.length > 0 ? (
        posts.map((post) => (
          <li key={`posts_${post.id}`}>
            <PostItemSmall post={post} />
          </li>
        ))
      ) : (
        <h3>Kunde inte hämta inlägg</h3>
      )}
    </ul>
  );
}
export default PostList;
