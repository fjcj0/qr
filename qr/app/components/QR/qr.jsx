"use client";
import './qr.css';
import urllink from '../../iconbuttons/www-click.png';
import facebooklink from '../../iconbuttons/facebook.png';
import instagramlink from '../../iconbuttons/instagram.png';
import Image from 'next/image';
import githublink from '../../iconbuttons/github.png';
import whatsApp from '../../iconbuttons/whatsapp.png';
import { format } from 'date-fns';
import downloadicon2 from '../../iconbuttons/download (2).png';
import LevelOperatio1 from '../../leveloperation/h.bb945a69fa250b775e60.webp';
import LevelOperatio2 from '../../leveloperation/m.36d59391dd545efd9c33.webp';
import LevelOperatio3 from '../../leveloperation/q.3f3c37ed63b3d2970cfa copy.webp';
import LevelOperatio4 from '../../leveloperation/q.3f3c37ed63b3d2970cfa.webp';
const LogoOperation1 = 'https://img.icons8.com/?size=100&id=42961&format=png&color=000000';
const LogoOperation2 = 'https://img.icons8.com/?size=100&id=111139&format=png&color=000000';
const LogoOperation3 = 'https://img.icons8.com/?size=100&id=42828&format=png&color=000000';
const LogoOperation4 = 'https://img.icons8.com/?size=100&id=46949&format=png&color=000000';
const LogoOperation5 = 'https://img.icons8.com/?size=100&id=JWpT8cAn8G0V&format=png&color=000000';
const LogoOperation6 = 'https://img.icons8.com/?size=100&id=108806&format=png&color=000000';
const LogoOperation7 = 'https://img.icons8.com/?size=100&id=78DNxx5REZlb&format=png&color=000000';
const LogoOperation8 = 'https://img.icons8.com/?size=100&id=13362&format=png&color=000000';
const LogoOperation9 = 'https://img.icons8.com/?size=100&id=46996&format=png&color=000000';
const LogoOperation10 = 'https://img.icons8.com/?size=100&id=M9BULpeZb8QN&format=png&color=000000';
const LogoOperation11 = 'https://img.icons8.com/?size=100&id=119179&format=png&color=000000';
const LogoOperation12 = 'https://img.icons8.com/?size=100&id=64721&format=png&color=000000';
const LogoOperation13 = 'https://img.icons8.com/?size=100&id=64164&format=png&color=000000';
import FramesOperation from '../framesoperation/framesoperation';
import OperationStyleQr from '../OperationStyleQr/operationstyleqr';
import Centers from '../CenterBorder/centerborder';
import Corners from '../cornerstyle/cornerstyle';
import Shapes from '../shapes/shapes';
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
export default function QR() {
    const { t, i18n } = useTranslation();
    const [description,setDescription] = useState("");
    const BorderColorText = t("QrComponent.BorderColorShape");
    const BorderBacgroundColorText = t("QrComponent.CenterColorShape");
    const CornerColor = t("QrComponent.BorderColorCorner");
    const CornerBackgroundColor = t("QrComponent.BackgroundColorCorner");
    const [level, setLevel] = useState("L");
    const [qrData, setQrData] = useState("");
    const [bodyName, setBodyName] = useState("nothing");
    const [cornerName, setCornerName] = useState("nothing");
    const [QrImage, setQrImage] = useState("");
    const [centerName, setCenterName] = useState("square");
    const [Logo, setLogo] = useState(LogoOperation13);
    const [BodyColor, setBodyColor] = useState("#000000");
    const [BackgroundColor, setBackgroundColor] = useState("#FFFFFF");
    const [downloadLink, setDownloadLink] = useState("");
    const [ActiveInputOperation, setActiveInputOperation] = useState("url");
    const [link,setLink] = useState("");
    const [id,setId] = useState("");
    const [IsLogin, setIsLogin] = useState(false);
    const token = {
        "token": localStorage.getItem("token")
    };
    const checkUrlOnChange = (event) => {
        const url = event.target.value;
        setQrData(url);
        let itsqr = document.getElementById('ITS-QR');
        let notqr = document.getElementById('NOT-QR');
        let buttonclick = document.getElementById('if-clicked-on-operation-qr');
        let buttonnotclick = document.getElementById('if-not-clicked-on-operation-qr');
        if (url.startsWith("https://") || url.startsWith("http://")) {
            itsqr.style.display = 'flex';
            notqr.style.display = 'none';
            buttonclick.style.display = 'flex';
            buttonclick.style.flexDirection = 'column';
            buttonnotclick.style.display = 'none';
            setLink(url);
        } else {
            itsqr.style.display = 'none';
            notqr.style.display = 'block';
            buttonclick.style.display = 'none';
            buttonnotclick.style.display = 'flex';
            buttonnotclick.style.flexDirection = 'column';
        }
    };
    const sendQrData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/GetQr/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: qrData,
                    config: {
                        body: bodyName,
                        eye: "frame1",
                        eyeBall: "ball1",
                        bodyColor: BodyColor,
                        bgColor: BackgroundColor,
                        eyeBallColor: "#000000",
                        eyeColor: "#000000",
                        gradientColor1: "#000000",
                        gradientColor2: "#ffffff",
                        gradientType: "linear",
                        gradientOnEyes: false,
                        logo: Logo === LogoOperation13 ? "" : Logo,
                        level: level
                    },
                    size: 50,
                    download: false,
                    file: "svg"
                }),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setQrImage(data.imageurl);
            setDownloadLink(data.imageurl);
            console.log('QR Data from API:', data);
        } catch (error) {
            console.error('There was an error:', error);
        }
    };
    useEffect(() => {
        sendQrData();
    }, []);
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
                setId(res.id);
            } 
        } catch (error) {
           console.log(error.message);
        }
    };
    useEffect(() => {
        if (localStorage.getItem('token')) {
            fetchToken();
            setIsLogin(true);
        }
        else {
            setIsLogin(false);
        }
    }, []);
    const handleDownload = async () => {
        if (downloadLink) {
            if (IsLogin) { 
                try {
                    const date = new Date();  
                    const downloadat = format(date, 'yyyy-MM-dd HH:mm:ss');
                    const response = await fetch("http://127.0.0.1:8000/addqr/", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ 
                            user_id: id,
                            qr_code: QrImage !== "" ? QrImage : null,
                            downloaded_at: downloadat,
                            description: description,
                            link: link
                        })
                    });
                    const res = await response.json();
                    console.log('API Response:', res);  
                    if (response.ok) {
                        alert("QR has been added");
                    } else {
                        alert(`Error: ${res.error || 'Unknown error'}`);
                    }
                } catch (error) {
                    alert(`Request failed: ${error.message || 'Unknown error'}`);
                }
            }
        }
    };
    const triggerFileUpload = (event) => {
        document.getElementById('inputfile').click();
    }
    const [activeSection, setActiveSection] = useState('Level');
    const LevelOperation = () => {
        const [activeLevel, setActiveLevel] = useState(level);
        const handleLevelClick = (level) => {
            setActiveLevel(level);
            setLevel(level);
        };
        return (
            <div className="level-operation" id="level-operation">
                {[LevelOperatio1, LevelOperatio2, LevelOperatio3, LevelOperatio4].map((image, index) => (
                    <button
                        className="card-level-operation"
                        key={index}
                        onClick={() => handleLevelClick(['L', 'M', 'H', 'Q'][index])}
                        style={{
                            border: activeLevel === ['L', 'M', 'H', 'Q'][index] ? '1px solid orange' : null
                        }}
                        type='button'
                    >
                        <div className="image-card-level-operation" id='image-card-level-operation'>
                            <Image src={image} className='image-card-level-operation-from-library' alt='' />
                        </div>
                        <div className="card-info-level-operation" id="card-info-level-operation">
                            <h5>{`Level ${['L', 'M', 'H', 'Q'][index]}`}</h5>
                            <p>{['7%', '15%', '30%', '25%'][index]}</p>
                        </div>
                    </button>
                ))}
            </div>
        );
    }
    const LogoOperation = ({ setlogo }) => {
        const [activeLogo, setActiveLogo] = useState(LogoOperation13);
        const handleLogoClick = (id, logo) => {
            setActiveLogo(id);
            setlogo(logo);
        };
        const logos = [
            LogoOperation13, LogoOperation1, LogoOperation2, LogoOperation3, LogoOperation4,
            LogoOperation5, LogoOperation6, LogoOperation7, LogoOperation8, LogoOperation9,
            LogoOperation10, LogoOperation11, LogoOperation12
        ];
        return (
            <div className="logo-operation" id="logo-operation">
                <div className="title-logo" id="title-logo">
                    <p>{t("QrComponent.LogoUpload")}</p>
                    <button type='button'><img src="/post.png" alt="" onClick={triggerFileUpload} /></button>
                    <input type="file" name="" className='inputfile' id='inputfile' style={{ display: 'none' }} />
                </div>
                <div className="card-pos-logo-operation">
                    <h3>{t("QrComponent.ChooseLogo")}</h3>
                    <div className="cards-logo-operation">
                        {logos.map((logo, index) => (
                            <button type='button'
                                className="card-logo-operation"
                                key={index}
                                onClick={() => handleLogoClick(index, logo)}
                                style={{
                                    border: activeLogo === index ? '1px solid orange' : '1px solid #333'
                                }}
                            >
                                <img src={logo} className='img-logo-operation' alt='' />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
    return (
        <form action="" className="qrs" id="qrs" autoComplete="off">
            <div className="qr-framework" id="qr-framework">
                <div className="button-section" id="button-section">
                    <div className="buttons-qr-framework" id="buttons-qr-framework">
                        <button type="button" onClick={() => setActiveInputOperation("url")} style={ActiveInputOperation === "url" ? { border: "2px solid blue" } : null}>
                            <Image src={urllink} className='img-bttons-qr-framework' alt='' />
                            Url
                        </button>
                        <button type="button" onClick={() => setActiveInputOperation("facebook")} style={ActiveInputOperation === "facebook" ? { border: "2px solid blue" } : null}>
                            <Image src={facebooklink} className='img-bttons-qr-framework' alt='' />
                            Facebook
                        </button>
                        <button type="button" onClick={() => setActiveInputOperation("instagram")} style={ActiveInputOperation === "instagram" ? { border: "2px solid blue" } : null}>
                            <Image src={instagramlink} className='img-bttons-qr-framework' alt='' />
                            Instagram
                        </button>
                        <button type="button" onClick={() => setActiveInputOperation("github")} style={ActiveInputOperation === "github" ? { border: "2px solid blue" } : null}>
                            <Image src={githublink} className='img-bttons-qr-framework' alt='' />
                            Github
                        </button>
                        <button type="button" onClick={() => setActiveInputOperation("whatsapp")} style={ActiveInputOperation === "whatsapp" ? { border: "2px solid blue" } : null}>
                            <Image src={whatsApp} className='img-bttons-qr-framework' alt='' />
                            Whatsapp
                        </button>
                    </div>
                </div>
                <div className="input-qr" id="input-qr">
                    <div className="input-url" id="input-url">
                        <input type="text" onChange={checkUrlOnChange} placeholder='E.g https://www.example.com' />
                     
                    </div>
                    <div className="description" id="description">
                    <textarea onChange={(event)=>setDescription(event.target.value)} name='description' placeholder='Description...' maxLength="250">

                    </textarea>
                    </div>
                </div>
                <div className="Apperncese">
                    <div className="appernce-title">
                        <h3>{t("QrComponent.Apperence")}</h3>
                        <p>{t("QrComponent.ApperencePar")}</p>
                    </div>
                    <div className="opearions-appernces-pos">
                        <div className="operation-appernces">
                            <button type="button" className='button-levels' id='button-levels' onClick={() => setActiveSection('Level')} style={activeSection === 'Level' ? { background: "#f0f8ff" } : null}>
                                {t("QrComponent.Level")}
                            </button>
                            <button type="button" className='button-logos' id='button-logos' onClick={() => setActiveSection('Logo')} style={activeSection === 'Logo' ? { background: "#f0f8ff" } : null}>
                                {t("QrComponent.Logo")}
                            </button>
                            <button type="button" className='button-shapes' id='button-shapes' onClick={() => setActiveSection('Shape')} style={activeSection === 'Shape' ? { background: "#f0f8ff" } : null}>
                                {t("QrComponent.Shape")}
                            </button>
                            <button type="button" className='button-frames' id='button-frames' onClick={() => setActiveSection('Frame')} style={activeSection === 'Frame' ? { background: "#f0f8ff" } : null}>
                                {t("QrComponent.Frame")}
                            </button>
                        </div>

                        {activeSection === 'Level' && (
                            <div className="level-operations" id="level-oprations">
                                <LevelOperation />
                            </div>
                        )}
                        {activeSection === 'Logo' && (
                            <div className="logos-operations" id="logos-operations">
                                <LogoOperation setlogo={setLogo} />
                            </div>
                        )}
                        {activeSection === 'Shape' && (
                            <div className="shapes-operation" id="shapes-operation">
                                <Shapes bodyName={bodyName} setBodyName={setBodyName} />
                                <div className="BorderBackgroundQr">
                                    <div className="title-border-background-qr" id="title-border-background-qr">
                                        <h3>{t("QrComponent.BorderAndBackground")}</h3>
                                    </div>
                                    <div className="background-border-qr-operation">
                                        <OperationStyleQr
                                            key="border-color"
                                            stylename="Border Color"
                                            setColor={setBodyColor}  // Pass the setter function
                                        />
                                        <OperationStyleQr
                                            key="background-color"
                                            stylename="Background Color"
                                            setColor={setBackgroundColor}  // Pass the setter function
                                        />
                                    </div>
                                    <div className="corner-qr-title" id="cornter-qr-title">
                                        <h3>{t("QrComponent.Corners")}</h3>
                                    </div>
                                    <div className="title-croner" style={{ marginTop: "0.7rem" }}>
                                        <h6>{t("QrComponent.BorderCorners")}</h6>
                                    </div>
                                    <Corners setCorner={setCornerName} />
                                    <div className="centers-title" id="centers-title" style={{ marginTop: "0.7rem" }}>
                                        <h6>{t("QrComponent.CenterCorners")}</h6>
                                        <Centers setCenterName={setCenterName} />
                                    </div>
                                    <div className="background-border-qr-operation">
                                        <OperationStyleQr key="border-color-corner" stylename={CornerColor} />
                                        <OperationStyleQr key="background-color-corner" stylename={CornerBackgroundColor} />
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeSection === 'Frame' && (
                            <div className="frames-operation" id="frames-operation">
                                <FramesOperation />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="qr-shape" id="qr-shape">
                <div className="qr-pos" id="qr-pos">
                    <div className="qr-image" id="qr-image">
                        <div className="NOT-QR" id="NOT-QR">
                            <img src="/empty_qr_preview2.87aa0fef1821b402fbaefe54e2b0dcd2.svg" alt="" />
                        </div>
                        <div className="ITS-QR" id="ITS-QR" style={{ display: 'none' }}>
                            {
                                QrImage === "" ?

                                    <div className="NOT-my-QR" id="NOT-my-QR">
                                        <img src="/empty_qr_preview2.87aa0fef1821b402fbaefe54e2b0dcd2.svg" alt="" />
                                    </div>

                                    :
                                    <img src={QrImage} className='QR-IMAGE' alt='' />
                            }
                        </div>
                    </div>
                    <div className="buttons-qr-shape" id="buttons-qr-shape">
                        <div className="if-not-clicked-on-operation-qr" id='if-not-clicked-on-operation-qr'>
                            <p>{t("QrComponent.GenerateButtonQr")}</p>
                            <p><Image src={downloadicon2} className='img-par-download-qr' alt='' />{t("QrComponent.DownloadButtonQr")}</p>
                        </div>
                        <div className="if-clicked-on-operation-qr" id='if-clicked-on-operation-qr' style={{ marginTop: "1rem" }}>
                            <button type="button" onClick={sendQrData}>{t("QrComponent.GenerateButtonQr")}</button>
                            <button type='button' onClick={handleDownload}><Image src={downloadicon2} className='img-par-download-qr' alt='' />{t("QrComponent.DownloadButtonQr")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}