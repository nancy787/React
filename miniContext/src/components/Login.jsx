import React, {useState, useContext} from "react";
import userContext from "../context/UserContext";

function Login() {
    const [username, setuserName] = useState('')
    const [password, setPassword] = useState('')
    const {setuser}  = useContext(userContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setuser({username, password})
    }

    return (
        <>
            <div>
                <h1>Login</h1>
                <input type="text" value={username} 
                onChange={(e) => setuserName(e.target.value)}
                placeholder="username"/>
                <input type="text" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password" />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}


export default Login
