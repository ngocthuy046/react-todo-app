import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import InputField from "../../components/InputField";
import FormTitle from "../../components/FormTitle";
import { LeftContent } from "../../components/LeftContent";

export default function Register() {
    const [user_name, setUserName] = useState('')
    const [user_email, setUserEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirmPassword] = useState('')

    // const dispatch = useDispatch();

    const handleSubmit = (event) => {
        function generateRandomId() {
            return Math.random().toString(36).substr(2, 9);
        }
        event.preventDefault();
        if (!user_name || !user_email || !password || !confirm_password) {
            alert("Please fill all the fields");
            return;
        }

        if (password !== confirm_password) {
            alert("Password and confirm password not match");
            return;
        }

        const id = generateRandomId();
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push({
            id,
            user_name,
            user_email,
            password
        })
        localStorage.setItem("users", JSON.stringify(users));
        console.log(users)

        alert("Registration Successful");
        setUserName('')
        setUserEmail('')
        setPassword('')
        setConfirmPassword('')
        
    }
    // const dispatch = useDispatch();
    return (
        <div className="register">
            <LeftContent />
            <form className="form" onSubmit={handleSubmit}>
                <FormTitle titleMessage="Register" />
                <div className="form-field" >
                    <div className="input-field">
                        <label className="label">Full Name</label>
                        <input 
                            className="input-content" 
                            type="text" 
                            placeholder="Enter your Name" 
                            value={user_name} 
                            onChange={(event) => setUserName(event.target.value)} 
                        />
                    </div>
                    <div className="input-field">
                        <label className="label">Email</label>
                        <input 
                            className="input-content" 
                            type="email" 
                            placeholder="Enter your Email" 
                            value={user_email} 
                            onChange={(event) => setUserEmail(event.target.value)} 
                        />
                    </div>
                    <div className="input-field">
                        <label className="label">Password</label>
                        <input 
                            className="input-content" 
                            type="password" 
                            placeholder="At least 4 characters" 
                            value={password} 
                            onChange={(event) => setPassword(event.target.value)} 
                        />
                    </div>
                    <div className="input-field">
                        <label className="label">Confirm Password</label>
                        <input 
                            className="input-content" 
                            type="password" 
                            placeholder="Repeat Password" 
                            value={confirm_password} 
                            onChange={(event) => setConfirmPassword(event.target.value)} 
                        />
                    </div>
                    {/* <InputField
                        inputType="user_name"
                        id="user-name"
                        name="user_name"
                        value={user_name}
                        onChange={handleChange}
                    />
                    <InputField
                        inputType="user_email"
                        id="user-email"
                        name="user-email"
                    />
                    <InputField
                        inputType="password"
                        id="password"
                        name="password"
                    />
                    <InputField
                        inputType="confirm_password"
                        id="confirm-password"
                        name="confirm-password"
                    /> */}
                </div>
                <div className="form-bottom-container">
                    <div >
                        <p className="internal-link-text">
                            Already have an account?
                            <a href="/login" className="button__link">Login here</a>
                        </p>
                    </div>
                    <button className="button">Register</button>
                </div>
            </form>
        </div>
    );
};
