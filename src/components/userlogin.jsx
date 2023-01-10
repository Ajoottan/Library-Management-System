import {useNavigate} from "react-router-dom";
import "../styles/userLogin.css"
const UserLogin = () => {
    let navigate = useNavigate()
    let login = () => {
        navigate('/user/')

    }
    return (
        <div className="userLogin">
            <div className="form_container_card">
                <h1>Login as User</h1>
                <div className="form_input">
                    <form onSubmit={login}>
                    <img height="100px" width="100px" src="images/user-icon.jpg" alt="" />
                        <div className="email">
                            <label htmlFor="email">Email:</label>
                            <input type="email" required placeholder=" Enter email" />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password:</label>
                            <input type="password" required placeholder=" Enter password" />
                        </div>
                        <button>Log in</button>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default UserLogin;