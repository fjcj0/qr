"use client";
import './styleqr.css';
import OperationStyleQr from '../OperationStyleQr/operationstyleqr';
import Corners from '../cornerstyle/cornerstyle';
import Center from '../CenterBorder/centerborder';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import i18n from 'i18next';
export default function StyleQr() {
    const {t,i18n} = useTranslation();
    const BorderColorText = t("QrComponent.BorderColorShape");
    const BorderBacgroundColorText = t("QrComponent.CenterColorShape");
    const CornerColor = t("QrComponent.BorderColorCorner");
    const CornerBackgroundColor = t("QrComponent.BackgroundColorCorner");
    return (
        <div className="BorderBackgroundQr">
            <div className="title-border-background-qr" id="title-border-background-qr">
                <h3>{t("QrComponent.BorderAndBackground")}</h3>
            </div>
            <div className="background-border-qr-operation">
                <OperationStyleQr key="border-color" stylename={BorderColorText} />
                <OperationStyleQr key="background-color" stylename={BorderBacgroundColorText} />
            </div>
            <div className="corner-qr-title" id="cornter-qr-title">
                <h3>{t("QrComponent.Corners")}</h3>
            </div>
            <div className="title-croner" style={{marginTop: "0.7rem"}}>
                <h6>{t("QrComponent.BorderCorners")}</h6>
            </div>
                <Corners/>
                <div className="centers-title" id="centers-title"style={{marginTop: "0.7rem"}}>
            <h6>{t("QrComponent.CenterCorners")}</h6>
            <Center/>
            </div>
            <div className="background-border-qr-operation">
                <OperationStyleQr key="border-color-corner" stylename={CornerColor} />
                <OperationStyleQr key="background-color-corner" stylename={CornerBackgroundColor} />
            </div>   
        </div>
    );
}