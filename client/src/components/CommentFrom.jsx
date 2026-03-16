import { Button } from "@mui/material";

function CommentFrom() {
    return ( <form>
        <div>
            Title:  <input type="text" />
        </div>
        <div>
            Innehåll  <textarea rows="5"></textarea>

        </div>
        <Button>Skicka kommentar</Button>
    </form> 
    );
}

export default CommentFrom;