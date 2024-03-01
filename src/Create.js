import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Lesley');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setIsLoading(true);
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('New blog added');
            setIsLoading(false);
            //history.go(-1); // Go back to the previous page
            history.push('/');
        })
    }
    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
                <label>Blog body:</label>
                <textarea value={body} onChange={(e)=>setBody(e.target.value)} required></textarea>
                <label>Blog author:</label>
                <select value={author} onChange={(e)=> setAuthor(e.target.value)}>
                    <option value="lesley">Lesley</option>
                    <option value="kayla">Kayla</option>
                </select>
               {!isLoading && <button>Add Blog</button>}
               {isLoading && <button disabled>Adding blog...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    );
}
 
export default Create;