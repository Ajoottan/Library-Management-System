import { Link } from "react-router-dom";
import "../styles/adminNavbar.css"

const AdminNavbar = () => {
    return ( 
        <div className="adminNavbar">
            <div className="navbar">
            <div className="heading">
                <h1>Admin Portal</h1>
            </div>    
                <div className="links">
                    <Link to='/admin/'>Home</Link>
                    <Link to='/admin/add-book'>Add Books</Link>
                    <Link to='/admin/add-user'>Add User</Link>
                    <Link to='/admin/book-list'>Book List</Link>
                    <Link to='/admin/user-list'>User List</Link>
                    <Link to='/'>Log Out</Link>
                </div>
                </div>
            
        </div>
     );
}
 
export default AdminNavbar;