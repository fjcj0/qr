"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation for routing
import './signin.css';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import i18n from 'i18next';

export default function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { t, i18n } = useTranslation();
    const router = useRouter(); // Initialize router

    const CheckUser = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:8000/Login/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password })
            });
            const result = await response.json();
            console.log(result);
            if (response.ok) {
                localStorage.setItem("token", result.token);
                router.replace("/PROFILE");
            } else {}
        } catch (error) {}
    };
    return (
        <form onSubmit={CheckUser} className="sign-in" id="sign-in">
            <div className="container-form" id="container-form">
                <div className="background" id="background"></div>
                <div className="info-login" id="info-login">
                    <h1>{t("SignInComponent.HeaderSignIn")}</h1>
                    <div className="input" id="input">
                        <input
                            type="text"
                            name="username"
                            id=""
                            placeholder={t("SignInComponent.InputPlaceHolderUserNameSignIn")}
                            maxLength="20"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <img src="/profile.png" alt="" />
                    </div>
                    <div className="input" id="input">
                        <input
                            type="password"
                            name="password"
                            id=""
                            placeholder={t("SignInComponent.InputPlaceHolderPasswordSignIn")}
                            maxLength="15"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <img src="/padlock.png" alt="" />
                    </div>
                    <button type="submit">{t("SignInComponent.ButtonSignIn")}</button>
                    <hr />
                    <div className="checkbox" id="checkbox">
                        <label htmlFor="">
                            {t("SignInComponent.RememberPassword")}
                            <input type="checkbox" />
                        </label>
                        <a href="#">{t("SignInComponent.ForgetPassword")}</a>
                    </div>
                </div>
            </div>
        </form>
    );
}