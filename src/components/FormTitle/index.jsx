import React from "react";
// import { Register } from "../../pages/register";

const titleMessages = {
    Register: {
        title: "Hello there!",
        message: "Sign Up to Get Started"
    },

    Login: {
        title: "Welcome back!",
        message: "Login to Get Started"
    }
}

const FormTitle = ({ titleMessage }) => {
    const { title, message } = titleMessages[titleMessage];

    return (
        <div className="form-title">
            <h2 className="welcome-message__title">{title}</h2>
            <p className="p">{message}</p>
        </div>
    )
}

export default FormTitle
