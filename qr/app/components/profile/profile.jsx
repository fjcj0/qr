"use client";
import { use, useState } from 'react';
import './profile.css';
import QR from '../qr/qr';
import '../../i18n';
import { useEffect } from 'react';
import i18n from 'i18next';
import { useRouter } from 'next/navigation';
import { Bar, Line } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, Filler } from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    Filler
);
export default function Profile() {
    const [option, setOption] = useState("newqr");
    const [vistorts, setVistorsNumber] = useState(12);
    const [scanners, setScannersNumber] = useState(30);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newname, setNewName] = useState("");
    const [newemail, setNewEmail] = useState("");
    const [newpassword, setNewPassWord] = useState("");
    const [subscribersnumber, setSubscribersNumber] = useState(12);
    const [qrgeneratednumber, setQrGeneratedNumber] = useState(40);
    const { t, i18n } = useTranslation();
    const [LangOnSelect, setLangOnSelect] = useState("en");
    const [LangOnClick, setLangOnClick] = useState("en");
    const [IsShownTools, setIsShownTools] = useState(false);
    const [id, setId] = useState(0);
    const [QrInformation, setQrInformation] = useState([]);
    const router = useRouter();
    const token = {
        "token": localStorage.getItem("token")
    };
    const DeleteAccount = async () => {
        try {
            const response = await fetch(
                "http://127.0.0.1:8000/DeleteAccount/",
                {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(token) // Corrected here
                }
            );
            const res = await response.json();
            if (response.ok) {
                setEmail("");
                setName("");
                setPassword("");
                setNewEmail("");
                setNewPassWord("");
                setNewName("");
                router.replace("/MAIN");
            } else {}
        } catch (error) {}
    };
    const EditInformation = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:8000/ChangeInformation/", {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: newname,
                    email: newemail,
                    password: newpassword,
                    token: localStorage.getItem("token")
                })
            });
            const result = await response.json();
            if (response.ok) {
                alert("Information updated successfully!");
                setEmail(newemail);
                setName(newname);
                setPassword(newpassword);
            } else {}
        } catch (error) {}
    };
    useEffect(() => {
            const fetchToken = async () => {
                try {
                    const response = await fetch("http://127.0.0.1:8000/GetTokenInfo/", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(token)
                    });
                    const res = await response.json();
                    if (response.ok) {
                        console.log(res);
                        setName(res.username);
                        setEmail(res.email);
                        setId(res.id);
                    } else {
                        router.replace('/SignIn');
                    }
                } catch (error) {
                    router.replace('/SignIn');
                }
            };
            fetchToken();
    }, []);
    useEffect(() => {
        const FetchQr = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/SelectQr/", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        user_id: id
                    })
                });
                const res = await response.json();
                if (response.ok) {
                    setQrInformation(res);
                }
            } catch (error) {}
        };
        FetchQr();
    }, [id]);
    const showTools = () => {
        var tools = document.getElementById('tools-buttons');
        if (IsShownTools == false) {
            tools.style.display = 'block';
            setIsShownTools(true);
        }
        else {
            tools.style.display = 'none';
            setIsShownTools(false);
        }
    };
    const handleLanguageChangedOnSelect = (e) => {
        setLangOnSelect(e.target.value);
    };
    const handleLanguageChangedOnClick = () => {
        i18n.changeLanguage(LangOnSelect);
        if (LangOnSelect === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
            document.documentElement.style.textAlign = 'right';
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            document.documentElement.style.textAlign = 'left';
        }
    };
    const visitorData = {
        labels: ['Visitors'],
        datasets: [
            {
                label: 'Number of Visitors',
                data: [vistorts],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };
    const scannerData = {
        labels: ['Scanners'],
        datasets: [
            {
                label: 'Number of Scanners',
                data: [scanners],
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
            },
        ],
    };
    const subscriberData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Subscribers',
                data: [5, 10, 15, 20, 25, subscribersnumber],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: true,
            },
        ],
    };
    const qrGeneratedData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'QR Codes Generated',
                data: [20, 25, 30, 35, 45, qrgeneratednumber],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: false,
            },
        ],
    };
    return (
        <>
            <div className="options" id="options">
                <div className="title-option" id="title-option">
                    <h3>{t('ProfileComponent.QR_DASHBOARD')}</h3>
                </div>
                <div className="my-operations" id="my-operations">
                    <button type="button" onClick={() => setOption("newqr")}><img src="https://img.icons8.com/?size=100&id=9GPnj7XBo3kk&format=png&color=000000" alt="" />{t('ProfileComponent.NEW_QR_CODE')}</button>
                    <button type="button" onClick={() => setOption("profile")}><img src="https://img.icons8.com/?size=100&id=118974&format=png&color=000000" alt="" />{t('ProfileComponent.Profile')}</button>
                    <button type="button" onClick={() => setOption("myqr")}><img src="https://img.icons8.com/?size=100&id=RGaEMTzdZT4y&format=png&color=000000" alt="" />{t('ProfileComponent.My_QR_code')}</button>
                    <button type="button" onClick={() => setOption("plans")}><img src="https://img.icons8.com/?size=100&id=46356&format=png&color=000000" alt="" />{t('ProfileComponent.Plans_And_Payments')}</button>
                    <button type="button" onClick={() => setOption("settings")}><img src="https://img.icons8.com/?size=100&id=Tb2Gc2HE05aa&format=png&color=000000" alt="" />{t('ProfileComponent.Settings')}</button>
                </div>
            </div>
            <div className="views" id="views">
                <div className="new-qr-code" id="new-qr-code" style={option === "newqr" ? { display: "block" } : { display: "none" }}>
                    <QR />
                </div>
                <div className="profile" id="profile" style={option === "profile" ? { display: "block" } : { display: "none" }}>
                    <div className="profile-title" id="profile-title">
                        <h3>{t('ProfileComponent.Profile')}</h3>
                    </div>
                    <div className="charts" id="charts">
                        <div className="chart-vistort-profile" id="chart-vistort-profile">
                            <Bar
                                data={visitorData}
                                options={{
                                    responsive: true,
                                    plugins: {
                                        legend: { position: 'top' },
                                        title: { display: true, text: 'Visitor Numbers (Vertical)' }
                                    }
                                }}
                                className='Bar-visitors'
                                width="100%"
                                height="100%"
                            />
                        </div>
                        <div className="chart-scanner-qr" id="chart-scanner-qr">
                            <Bar
                                data={scannerData}
                                options={{
                                    responsive: true,
                                    indexAxis: 'y',
                                    plugins: {
                                        legend: { position: 'top' },
                                        title: { display: true, text: 'Scanner Numbers (Horizontal)' }
                                    }
                                }}
                                className='Bar-scanners'
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </div>
                    <div className="information-profile" id="information-profile">
                        <div className="info-profile" id="info-profile">
                            <div className="infotext" id="infotext">
                                <p>{t('ProfileComponent.Name')}</p>
                                <p>{name}</p>
                            </div>
                            <div className="logo-info">
                                <img src="https://img.icons8.com/?size=100&id=2800&format=png&color=000000" alt="" />
                            </div>
                        </div>
                        <div className="info-profile" id="info-profile">
                            <div className="infotext" id="infotext">
                                <p>{t('ProfileComponent.Email')}</p>
                                <p>{email}</p>
                            </div>
                            <div className="logo-info">
                                <img src="https://img.icons8.com/?size=100&id=108813&format=png&color=000000" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-qr-codes" id="my-qr-codes" style={option === "myqr" ? { display: "block" } : { display: "none" }}>
                    <div className="qr-codes-title" id="qr-codes-title">
                        <h3>{t('ProfileComponent.QrCodes')}</h3>
                    </div>
                    <div className="qr-codes" id="qr-codes">
                        {/*<img key="" src="" className="qr-image-code" alt=""/>*/}
                        <table className='qr-table' id='qr-table'>
                            <thead>
                                <tr>
                                    <th>QR</th>
                                    <th>Id</th>
                                    <th>Downloaded at</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {QrInformation.map((qr) => (
                                    <tr key={qr.id}>
                                        <td>
                                            <img src={qr.qr_code} alt={`QR Code ${qr.id}`} className="qr-image-code" />
                                        </td>
                                        <td>{qr.id}</td>
                                        <td>{new Date(qr.downloaded_at).toLocaleString()}</td>
                                        <td>{qr.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="plans-payments" id="plans-payments" style={option === "plans" ? { display: "block" } : { display: "none" }}>
                    <div className="plan-title" id="plan-title">
                        <h3>{t('ProfileComponent.plansandpayments')}</h3>
                    </div>
                    <div className="plan-box" id="plan-box">
                        <button type="button" class="plan" id="plan1">
                            <div className="plan-header">
                                <h4>{t('ProfileComponent.Basic_plan')}</h4>
                            </div>
                            <ul className="plan-features">
                                <li>{t('ProfileComponent.Billed_annauly')}</li>
                            </ul>
                            <div className="plan-price">
                                AED 79.00/month
                            </div>
                            <button className="plan-button">{t('ProfileComponent.BuyButton')}</button>
                        </button>
                        <button type="button" class="plan" id="plan2">
                            <div className="plan-header">
                                <h4>{t('ProfileComponent.Medium_Plan')}</h4>
                            </div>
                            <ul className="plan-features">
                                <li>{t('ProfileComponent.Billed_semi_annualy')}</li>
                            </ul>
                            <div className="plan-price">
                                AED 119.00/month
                            </div>
                            <button className="plan-button">{t('ProfileComponent.BuyButton')}</button>
                        </button>
                        <button type="button" class="plan" id="plan2">
                            <div className="plan-header">
                                <h4>{t('ProfileComponent.Best_plan')}</h4>
                            </div>
                            <ul className="plan-features">
                                <li>{t('ProfileComponent.Billed_quartitly')}</li>
                            </ul>
                            <div className="plan-price">
                                AED 159.00/month
                            </div>
                            <button className="plan-button">{t('ProfileComponent.BuyButton')}</button>
                        </button>
                    </div>
                    <div className="percenet-payment" id="percenet-payment">
                        <div className="subcriber-number-chart" id="subscriber-number-chart">
                            <Line
                                data={subscriberData}
                                options={{
                                    responsive: true,
                                    plugins: {
                                        legend: { position: 'top' },
                                        title: { display: true, text: 'Subscribers Over Time' },
                                    },
                                }}
                                width="100%"
                                height="100%"
                            />
                        </div>
                        <div className="qr-generater-number" id="qr-generated-number">
                            <Line
                                data={qrGeneratedData}
                                options={{
                                    responsive: true,
                                    plugins: {
                                        legend: { position: 'top' },
                                        title: { display: true, text: 'QR Codes Generated Over Time' },
                                    },
                                }}
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </div>
                </div>
                <div className="settings" id="settings" style={option === "settings" ? { display: "block" } : { display: "none" }}>
                    <div className="settings-title" id="settings-title">
                        <h3>{t('ProfileComponent.Settings')}</h3>
                    </div>
                    <div className="box-position-info">
                        <form onSubmit={EditInformation} className="box-setting contatct-information" id="box-setting contact-information">
                            <div className="title-box" id="title-box">
                                <h3>{t('ProfileComponent.contact_information')}</h3>
                            </div>
                            <div className="inputs-information" id="inputs-information">
                                <input type="text" name="username" id="input-info input-name-info" className="input-info input-name-info" placeholder={t('ProfileComponent.nameinputplaceholder')} onChange={(event) => setNewName(event.target.value)} required />
                                <input type="email" name="email" id="input-info input-email-info" className="input-info input-email-info" placeholder={t('ProfileComponent.emailinputplaceholder')} onChange={(event) => setNewEmail(event.target.value)} required />
                                <input type="password" name="password" id="input-info input-password-info" className="input-info input-password-info" placeholder={t('ProfileComponent.passwordinputplaceholder')} onChange={(event) => setNewPassWord(event.target.value)} required />
                            </div>
                            <hr />
                            <div className="button-save" id="button-save">
                                <button type='submit'>{t('ProfileComponent.buttonsave')}</button>
                            </div>
                        </form>
                        <div className="box-setting contatct-information" id="box-setting contact-information">
                            <div className="title-box" id="title-box">
                                <h3>{t('ProfileComponent.ChooseLanguage')}</h3>
                            </div>
                            <div className="inputs-information" id="inputs-information">
                                <select name="" id="" onChange={handleLanguageChangedOnSelect}>
                                    <option value="en">English</option>
                                    <option value="ar">Arabic</option>
                                </select>
                            </div>
                            <hr />
                            <div className="button-save" id="button-save">
                                <button type='button' onClick={handleLanguageChangedOnClick}>{t('ProfileComponent.buttonsave')}</button>
                            </div>
                        </div>
                        <div className="box-setting contatct-information" id="box-setting contact-information">
                            <div className="title-box" id="title-box">
                                <h3>{t('ProfileComponent.DeleteAccount')}</h3>
                            </div>
                            <div className="inputs-information" id="inputs-information">
                                <div className="delete-par">
                                    <p>{t('ProfileComponent.DeletePar')}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="button-delete" id="button-delete">
                                <button type='button' onClick={DeleteAccount}>{t('ProfileComponent.ButtonDelete')}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="theme" id="theme">
                    <button type="button" className="theme-button" id="theme-button" onClick={showTools}>
                        <img src="https://img.icons8.com/?size=100&id=sNLuT9tfwa6Q&format=png&color=000000" alt="" />
                    </button>
                    <div className="tools-buttons" id="tools-buttons">
                        <button type="button" className="button-tool" id="button-tool" onClick={() => setOption("newqr")}>
                            <img src="https://img.icons8.com/?size=100&id=43185&format=png&color=000000" alt="" />
                        </button>
                        <button type="button" className="button-tool" id="button-tool" onClick={() => setOption("profile")}>
                            <img src="https://img.icons8.com/?size=100&id=OzSgYHFGY0M1&format=png&color=000000" alt="" />
                        </button>
                        <button type="button" className="button-tool" id="button-tool" onClick={() => setOption("myqr")}
                        ><img src="https://img.icons8.com/?size=100&id=50123&format=png&color=000000" alt="" />
                        </button>
                        <button type="button" className="button-tool" id="button-tool" onClick={() => setOption("plans")}>
                            <img src="https://img.icons8.com/?size=100&id=Tys9Kx3DE6tD&format=png&color=000000" alt="" />
                        </button>
                        <button type="button" className="button-tool" id="button-tool" onClick={() => setOption("settings")}>
                            <img src="https://img.icons8.com/?size=100&id=26268&format=png&color=000000" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}