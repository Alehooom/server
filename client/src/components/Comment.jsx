function Comment({ comment }) {
    return (
        <div style={{ borderTop: "1px solid #ddd", marginTop: "15px", padding: "10px" }}> 
            <h4>{comment.title}</h4>
            <p><strong>Datum:</strong> {comment.createdAt}</p>
            <p><strong>Av:</strong> {comment.author}</p>
            <p>{comment.body}</p>
        </div>
    );
}

export default Comment;{ Comment}