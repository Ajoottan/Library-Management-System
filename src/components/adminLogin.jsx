import {useState} from "react"
import {useNavigate} from "react-router-dom";
import "../styles/adminLogin.css"
const AdminLogin = () => {
    let [email,setEmail] = useState('')
    let eml = ((e)=>setEmail(e.target.value))
    let [password,setPassword] = useState('')
    let pswd = ((e)=>setPassword(e.target.value)) 
    let navigate = useNavigate()

    let login = (e) => {
        e.preventDefault();
        let data = {email,password}
        console.log(data);
        if (email == "admin@gmail.com" && password == "0000") {
            navigate('/admin/')
        } else {
            alert("invalied credentials")
            
        }
    }
    return( 
        <div className="adminLogin">
            <div className="form_container_card1">
                <h1>Login as Admin</h1>
                <div className="form_input1">
                    <form onSubmit={login}>
                        <img height="100px" width="100px" src="images/user-icon.jpg" alt="" />
                        <div className="email1">
                            <label htmlFor="email">Email:</label>
                            <input type="email" value={email} required onChange={eml} placeholder=" Enter email" />
                        </div>
                        <div className="password1">
                            <label htmlFor="password">Password:</label>
                            <input type="password" value={password} required onChange={pswd} placeholder=" Enter password" />
                        </div>
                        <button>Log in</button>
                    </form>
                </div>
            </div>

        </div>

    )
}
export default AdminLogin;