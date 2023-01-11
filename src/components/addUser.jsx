import { useState } from "react";
import { useNavigate } from "react-router-dom"
import "../styles/addUser.css"
const AddUser = () => {

    let [name, setName] = useState("")
    let [age, setAge] = useState("")
    let [email, setEmail] = useState("")
    let [phoneNum, setPhoneNum] = useState("")
    let navigate = useNavigate()
    let handleSubmit = (e) => {
        e.preventDefault();
        //data to be posted
        let userData = { name, age, email, phoneNum }
        //posting to server
        fetch('http://localhost:4000/user', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(userData)
        })
        alert("User has been added")
        navigate('/admin/user-list')

    }



    return (
        <div className="au_body">
            <div className="addUser">
                <div className="userheading">
                    <h1>Add a user</h1>
                </div>
                <div className="au_content">
                    <div className="au_img">
                        <img height='450px' width='650px' src="/images/adduser.jpg" alt="" />
                    </div>
                    <div className="formUser">
                        <form action="" onSubmit={handleSubmit}>
                            <div className="userName">
                                <label htmlFor="">Name: </label>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
                            </div>
                            <div className="userAge">
                                <label htmlFor="">Age: </label>
                                <input type="number" min='1' value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter age" />
                            </div>
                            <div className="userEmail">
                                <label htmlFor="">Email: </label>
                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                            </div>
                            <div className="userPhno">
                                <label htmlFor="">Phone num: </label>
                                <input type="tel" minLength='10' maxLength='10' value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)} placeholder="Enter phone num." />
                            </div>
                            <button>Add user</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddUser;