import { Link } from "react-router-dom";
import '../styles/landingPage.css'
const LandingPage = () => {
    return (
        <div className="landingpage">
            <div className="selectLoginType">
                <div className="content">
                    <h1>Library Management System</h1>
                    <div className="select">
                        <div className="admin">
                            <Link to='/admin-login'>
                                <img height="100px" width="100px" src="images/user-icon.jpg" alt="" />
                                <p>Admin Login</p>
                            </Link>
                        </div>
                        <div className="user">
                            <Link to='/user-login'>
                                <img height="100px" width="100px" src="images/user-icon.jpg" alt="" />
                                <p> User Login</p>
                            </Link>
                        </div>

                    </div>

                </div>


            </div>
        </div>
    )
}
export default LandingPage;