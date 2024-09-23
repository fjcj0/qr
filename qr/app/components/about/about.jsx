"use client";
import './about.css';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import './about.css';
import i18n from 'i18next';
export default function About(){
    const { t, i18n } = useTranslation();
    return(
       <section className="about" id="about">
        <div className="container-about" id="container-about">
            <h1>{t("AboutComponent.ContainerAboutTitle")}<br/><span>{t("AboutComponent.ContainerAboutTitleSpan")}</span></h1>
            <div className="benfits-qr" id="benfits-qr">
                <div className="benfit-qr" id="benfit-qr">
                    <h3>{t("AboutComponent.FirstBenefitTitle")}<span>{t("AboutComponent.FirstBenefitTitleSpan")}</span></h3>
                    <p>{t("AboutComponent.FirstBenefitPar")}</p>
                </div>
                <div className="benfit-qr" id="benfit-qr">
                    <h3>{t("AboutComponent.SecondBenefitTitle")}<span>{t("AboutComponent.SecondBenefitTitleSpan")}</span></h3>
                    <p>{t("AboutComponent.SecondBenefitPar")}</p>
                </div>
                <div className="benfit-qr" id="benfit-qr">
                    <h3>{t("AboutComponent.ThirdBenefitTitle")}<span>{t("AboutComponent.ThirdBenefitTitleSpan")}</span></h3>
                    <p>{t("AboutComponent.ThirdBenefitPar")}</p>
                </div>
                <div className="benfit-qr" id="benfit-qr">
                    <h3>{t("AboutComponent.FourthBenefitTitle")}<span>{t("AboutComponent.FourthBenefitTitleSpan")}</span></h3>
                    <p>{t("AboutComponent.FourthBenefitPar")}</p>
                </div>
            </div>
        </div>
        <div className="background-about" id="background-about">

        </div>
       </section>
    );
}