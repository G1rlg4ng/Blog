import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Content<span>Verse</span></h1>
            <div className="links">
                <Link to="/" style={{color: "white",
                    backgroundColor: "#007fff",
                    borderRadius: "5px"}}>Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: "#007fff",
                    borderRadius: "5px"
                }}>New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;