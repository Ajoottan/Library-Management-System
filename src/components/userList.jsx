import { useState,useEffect } from "react";
import "../styles/userList.css"
const UserList = () => {
    let[user,setUser] = useState([])
    useEffect(()=>{
        let fetchData = async() =>{
            let response = await fetch('http://localhost:4000/user')
            let data = await response.json()
            setUser(data)
        }
        fetchData()
    },[])
    let handleDelete = (id,name) =>{
        setUser(user.filter(x => x.id !== id))
        alert(`${name} has been removed`)
    }
    return ( 
        <div className="userList">
            <h1>User List : {user.length}</h1>
            <h2></h2>

            <div className="user_section">
                {
                    user.map(data =>(
                        <div className="user_card">

                            <h2>Name: {data.name}</h2>
                            <h4>Age: {data.age}</h4>
                            <h4>Email id: {data.email}</h4>
                            <h4>Phone num: {data.phoneNum}</h4>
                            <button onClick={()=>handleDelete(data.id,data.name)}>Delete</button>
                        </div>
                    ))
                    
                }
            </div>
        </div>
     );
}
 
export default UserList;