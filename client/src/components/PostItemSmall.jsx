import { Link } from 'react-router-dom';
import Tag from './Tag';

function PostItemSmall({ post }) {
  return (
    <>
      <Link to={`/posts/${post.id}`}>
        <h3>{post.title}</h3>
      </Link>
      
      <p>
        Skrivet av: {''}
        <Link to={`/users/${post.author.id}/posts`}> 
          {post.author.username}
        </Link>
      </p>

      {post.tags && post.tags.length > 0 && 
        post.tags.map((tag, index) => <Tag key={index} text={tag} />)
      }
      
      <p>{post.body}</p>
    </>
  );
}

export default PostItemSmall;