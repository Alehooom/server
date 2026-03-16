import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import PostItemLarge from '../components/PostItemLarge';
import CommentFrom from '../components/CommentFrom';
import Comment from "../components/Comment";

function PostDetail() {
    const post = {

    };

    const navigate = useNavigate();

return (
    <div>
        <PostItemLarge post={post} />
        <button onClick={() => navigate (-1)}>Tillbaka</button>
        <button onClick={() => navigate(`/posts/${post.id}/edit`)}>Ändra</button>
        <CommentFrom />
        {post.comments && post.comments.map((comment, i) => (<Comment key={`comment_${i}`} comment={comment} />
))}
    </div>
);

}

export default PostDetail;