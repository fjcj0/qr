"use client";
import './inputtextframe.css';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import i18n from 'i18next';
import { useState } from 'react';
export default function InputTextFrame(){
    const {t,i18n} = useTranslation();
    const [Text,setText] = useState("Scan Me!");
    const [TextColor,setTextColor] = useState("#00000");
    const handletextchange = (event) => {
        const mytext = event.target.value;
        setText(mytext);
    };
    const handletextcolorchange = (event) => {
       const colortext = event.target.value;
       setTextColor(colortext);
    };
    return(
    <div className="container-text-frame" id="container-text-frame">
        <div className="text-frame" id="text-frame">
            <div className="title-text-frame">
                <h4>{t("QrComponent.TextFrame")}</h4>
            </div>
            <input type="text" name="" id="" onChange={handletextchange} />
        </div>
        <div className="text-color-frame" id="text-color-frame">
            <div className="title-text-frame" id="title-text-frame">
                <h4>{t("QrComponent.TextColorFrame")}</h4>
            </div>
            <input type="color" name="" id="" onChange={handletextcolorchange}/>
        </div>
    </div>
    );
}