"use client";
import './signup.css';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import i18n from 'i18next';
import { useState } from 'react';

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassWord] = useState("");
    const { t, i18n } = useTranslation();
    const AddUser = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8000/Users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                })
            });
            const res = await response.json();
            if (response.ok) {
                alert("The user has been added");
            } else {
                alert("An error occurred: " + (res.error || "Unknown error"));
            }
        } catch (error) {
            alert("An error occurred: " + error.message);
        }
    };
    
    return (
        <form onSubmit={AddUser} className="signup" id="signup">
            <div className="sign-up-container" id="sign-up-container">
                <h1>{t("SignUpComponent.HeaderSignUp")}</h1>
                <div className="my-input" id="my-input">
                    <input
                        type="text"
                        name="username"
                        placeholder={t("SignUpComponent.InputPlaceHolderUserNameSignUp")}
                        maxLength="20"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <img src="/profile.png" alt="" />
                </div>
                <div className="my-input" id="my-input">
                    <input
                        type="email"
                        name="email"
                        placeholder={t("SignUpComponent.InputPlaceHolderEmailSignUp")}
                        maxLength="40"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <img src="/email.png" alt="" />
                </div>
                <div className="my-input" id="my-input">
                    <input
                        type="password"
                        name="password"
                        placeholder={t("SignUpComponent.InputPlaceHolderPasswordSignUp")}
                        maxLength="15"
                        value={password}
                        onChange={(e) => setPassWord(e.target.value)}
                    />
                    <img src="/padlock.png" alt="" />
                </div>
                <button type="submit">{t("SignUpComponent.ButtonSignUp")}</button>
            </div>
        </form>
    );
}