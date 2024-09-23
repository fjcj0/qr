"use client";
import './main.css';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import i18n from 'i18next';

export default function Main() {
    const { t, i18n } = useTranslation();

    return (
        <section className="main" id="main">
            <div className="main-info" id="main-info">
                <div className="container-main-info">
                    <h1 className="title-main" id="title-main">
                        {t("MainComponent.TitleMain")}<br/><span>{t("MainComponent.TitleMainSpan")}</span>
                    </h1>
                    <p>{t("MainComponent.ParagraphMain")}</p>
                    <a href="#">{t("MainComponent.CreateQrButton")}</a>
                </div>
            </div>
            <div className="background-main" id="background-main">
            </div>
        </section>
    );
}
