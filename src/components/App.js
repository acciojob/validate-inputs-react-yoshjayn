import React, { useState } from "react";
import "./../styles/App.css";

function App() {
  const [user, setUser] = useState({
    name: "",
    address: "",
    email: "",
    mobile: ""
  });
  let { name, address, email, mobile } = user;

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

    // Name validation
    if (![...name].every(char => (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || char === ' ')) {
      newErrors.name = "Name should contain only letters";
      isValid = false;
    }

    // Address validation
    if (![...address].every(char => 
      (char >= 'A' && char <= 'Z') || 
      (char >= 'a' && char <= 'z') || 
      (char >= '0' && char <= '9') ||
      char === ' '
    )) {
      newErrors.address = "Address should not contain special characters";
      isValid = false;
    }

    // Email validation
    if (!(email.includes('@') && email.includes('.com'))) {
      newErrors.email = "Email should contain @ and .com";
      isValid = false;
    }

    // Mobile validation
    if (mobile.length > 10) {
      newErrors.mobile = "Mobile number should not be more than 10 characters";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setSuccess("Form submitted!");
    } else {
      setSuccess("");
    }
  }

  return (
    <div>
      {success && <span id="success">{success}</span>}
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input 
          onChange={(e) => setUser({ ...user, name: e.target.value })} 
          name="name" 
          value={name}
        />
        {errors.name && <span className="errorMessage">{errors.name}</span>}
        <br/>
        <label>Address</label>
        <input  
          onChange={(e) => setUser({ ...user, address: e.target.value })} 
          name="address" 
          value={address}
        />
        {errors.address && <span className="errorMessage">{errors.address}</span>}
        <br/>
        <label>Email</label>
        <input 
          onChange={(e) => setUser({ ...user, email: e.target.value })} 
          name="email" 
          value={email}
        />
        {errors.email && <span className="errorMessage">{errors.email}</span>}
        <br/>
        <label>Mobile</label>
        <input 
          type='number' 
          onChange={(e) => setUser({ ...user, mobile: e.target.value })} 
          name="mobile" 
          value={mobile}
        />
        {errors.mobile && <span className="errorMessage">{errors.mobile}</span>}
        
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;