import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../redux/actions/user.action";

import { LeftContent } from "../../components/LeftContent";

function LoginForm() {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    const [user_email, setUserEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        
        if (!user_email || !password) {
            alert("Please fill all the fields");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const checkUser = users.find((user) => user.user_email === user_email && user.password === password);

        if (!checkUser) {
            alert("User not found");
            return;
        } else {
            dispatch(LoginUser(checkUser));
            console.log(user)
            alert("Login Successful");
        }
        setUserEmail('')
        setPassword('')
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div>
                <div className="form-title">
                    <h1 class="text-3xl font-extrabold dark:text-white">
                        Hello!
                    </h1>
                    <p className="p">Sign Up to Get Started</p>
                </div>
                <div class="mb-5">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="name@example.com"
                        value={user_email}
                        onChange={(e) => setUserEmail(e.target.value)}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required
                    />
                </div>
                <div class="mb-5">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="At least 4 characters"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required
                    />
                </div>

                <div class="form-actions">
                    <div class="flex items-start mb-5">
                        <div class="flex items-center h-5">
                            <input id="login-page" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label for="login-page" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Already have an account? <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">Login here</a></label>
                    </div>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
                </div>

            </div>
        </form>
    );
};

export default function LoginPage() {
    return (
        <div className="login">
            <LeftContent />
            <LoginForm />
        </div>
    );
}
