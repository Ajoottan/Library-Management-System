import { Link } from "react-router-dom";
import "../styles/userNavbar.css"

const UserNavbar = () => {
    return (
        <div className="userNavbar">
            <div className="navbar1">
                <div className="heading1">
                    <h1>User Portal</h1>
                </div>
                <div className="links1">
                    <Link to='/user/'>Home</Link>                    
                    <Link to='/user/book-list'>Book List</Link>                
                    <Link to='/'>Log Out</Link>
                </div>
            </div>
        </div>
    );
}

export default UserNavbar;