"use client";
import './infromation.css';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import i18n from 'i18next';
export default function Information() {
    const { t, i18n } = useTranslation();
    useEffect(() => {
        const cards = document.querySelectorAll('.information-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.backgroundColor = 'transparent';
                const par = card.querySelector('.par-info');
                const title = card.querySelector('.title-info h3');
                par.style.color = 'black';
                title.style.color = 'black';
                card.style.transition = 'background-color 0.4s ease, color 0.3s ease';
            });
            card.addEventListener('mouseleave', () => {
                card.style.backgroundColor = '';
                const par = card.querySelector('.par-info');
                const title = card.querySelector('.title-info h3');
                par.style.color = 'white';
                title.style.color = 'white';
                card.style.transition = 'background-color 0.3s ease, color 0.3s ease';
            });
        });
    }, []);

    return (
        <section className="information" id="information">
            <h1>{t("InformationComponent.InformationTitle")}</h1>
            <div className="container-information" id="container-information">
                <div className="information-card">
                    <div className="icon-info">
                        <img src="/question-mark.png" alt="" />
                    </div>
                    <div className="title-info">
                        <h3>{t("InformationComponent.FirstTitleCard")}</h3>
                    </div>
                    <div className="par-info">
                        <p>{t("InformationComponent.FirstParCard")}</p>
                    </div>
                </div>
                <div className="information-card">
                    <div className="icon-info">
                        <img src="/working.png" alt="" />
                    </div>
                    <div className="title-info">
                        <h3>{t("InformationComponent.SecondTitleCard")}</h3>
                    </div>
                    <div className="par-info">
                        <p>{t("InformationComponent.SecondParCard")}</p>
                    </div>
                </div>
                <div className="information-card">
                    <div className="icon-info">
                        <img src="/mobile-app.png" alt="" />
                    </div>
                    <div className="title-info">
                        <h3>{t("InformationComponent.ThirdTitleCard")}</h3>
                    </div>
                    <div className="par-info">
                        <p>{t("InformationComponent.ThirdParCard")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
