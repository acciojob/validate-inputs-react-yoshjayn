import React, { useState } from "react";
import "./../styles/App.css";

function App() {
  const [user, setUser] = useState({
    name: "",
    address: "",
    email: "",
    mobile: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    address: "",
    email: "",
    mobile: ""
  });

  const [success, setSuccess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let isValid = true;
    const newErrors = {
      name: "",
      address: "",
      email: "",
      mobile: ""
    };

    // Name validation - only letters and spaces
    if (![...user.name].every(char => 
      (char >= 'A' && char <= 'Z') || 
      (char >= 'a' && char <= 'z') || 
      char === ' '
    )) {
      newErrors.name = "Name should contain only letters";
      isValid = false;
    }

    // Address validation - letters, numbers, and spaces
    if (![...user.address].every(char => 
      (char >= 'A' && char <= 'Z') || 
      (char >= 'a' && char <= 'z') || 
      (char >= '0' && char <= '9') ||
      char === ' '
    )) {
      newErrors.address = "Address should not contain special characters";
      isValid = false;
    }

    // Email validation - must contain @ and .com
    if (!(user.email.includes('@') && user.email.includes('.com'))) {
      newErrors.email = "Email should contain @ and .com";
      isValid = false;
    }

    // Mobile validation - max 10 digits
    if (user.mobile.length > 10) {
      newErrors.mobile = "Mobile number should not be more than 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    setSuccess(isValid ? "Form submitted!" : "");
  }

  return (
    <div>
      {success && <span id="success">{success}</span>}
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input 
          onChange={(e) => setUser({...user, name: e.target.value})} 
          value={user.name}
        />
        <span className="errorMessage">{errors.name}</span>
        
        <label>Address</label>
        <input  
          onChange={(e) => setUser({...user, address: e.target.value})} 
          value={user.address}
        />
        <span className="errorMessage">{errors.address}</span>
        
        <label>Email</label>
        <input 
          onChange={(e) => setUser({...user, email: e.target.value})} 
          value={user.email}
        />
        <span className="errorMessage">{errors.email}</span>
        
        <label>Mobile</label>
        <input 
          type="number"
          onChange={(e) => setUser({...user, mobile: e.target.value})} 
          value={user.mobile}
        />
        <span className="errorMessage">{errors.mobile}</span>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;