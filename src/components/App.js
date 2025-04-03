import React, { useState } from "react"
import "./../styles/App.css";


function App() {
    const [user, setUser] = useState({
        name: "",
        address: "",
        email: "",
        mobile: ""
    })
    let { name, address, email, mobile } = user;

    const[error, setError] = useState("")
    const[success, setSuccess] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        if (!name || !address || !email || !mobile) setError("Fill all inputs")

        //name           else if(!name.includes())
        else if(![...name].every(char => (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z'))) 
            setError("Name should contain only letters.");

        else if(![...address].every(char => (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || (char >='0' && char <= '9') ))
            setError("Address should not contain special characters.");
        
        else if(!(email.includes('@') && email.includes('.com'))) setError("Email should contain @ and .com")
            else if(mobile.length>10) setError("Mobile number should not be more than 10 characters")
        else setSuccess("Form submitted!")
        }
    return (
        <div>
            {/* App.js */}
            {error && <span class="errorMessage">{error}</span>}
            {success && <span id="success">{success}</span>}
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input onChange={(e) => setUser({ ...user, name: e.target.value })} name="name"></input>
                {/* <br/>
                {error && <span>{error}</span>}
                <br/> */}
                <label>Address</label>
                <input  onChange={(e) => setUser({ ...user, address: e.target.value })} name="address"></input>
                <label>Email</label>
                <input onChange={(e) => setUser({ ...user, email: e.target.value })} name="email"></input>
                <label>Mobile</label>
                <input type='number' onChange={(e) => setUser({ ...user, mobile: e.target.value })} name="mobile"></input>
                <button>Submit</button>
                {/* {console.log(user)} */}
            </form>
        </div>
    )
}

export default App