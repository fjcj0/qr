"use client";
import './operationstyleqr.css';
import SwitchButton from '../SwitchButton';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import i18n from 'i18next';
export default function OperationStyleQr({ stylename, setColor}) {
    const {t,i18n} = useTranslation();
    const [isGradientEnabled, setIsGradientEnabled] = useState(false); 
    const handleSwitchChange = () => {
        setIsGradientEnabled(prev => !prev);
    };

    const handleColor = (event) => {
        const color = event.target.value;
        setColor(color);  // Pass the color to the parent component
    };

    return (
        <div className="style-qr" id="style-qr">
            <div className="my-style-qr" id="my-style-qr">
                <h5>{stylename}</h5>    
                <label className='label-gradient-use'>
                    <SwitchButton 
                        id={`switch-${stylename}`}  // Unique id for each switch
                        checked={isGradientEnabled} 
                        onChange={handleSwitchChange} 
                    />
                    <p>{t("QrComponent.UseGradient")}</p>
                </label>
                <div className="input-one-color" id="input-one-color">
                    <input 
                        type="color" 
                        className='input-color'
                        onChange={handleColor}
                    />
                    <label className='transparent-use'>
                        <input 
                            type="checkbox"
                        />
                        <p>{t("QrComponent.TransparentBackground")}</p>
                    </label>
                 </div>
            </div>
        </div>
    );
}