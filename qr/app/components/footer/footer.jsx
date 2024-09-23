"use client";
import './footer.css';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import i18n from 'i18next';

export default function Footer() {
    const { t, i18n } = useTranslation();
    return (
        <footer id='footer'>
            <div className="footer-container">
                <div className="footer-section about">
                    <h2>{t("FooterComponent.FooterAboutUsTitle")}</h2>
                    <p>{t("FooterComponent.FooterAboutUsPar")}</p>
                </div>
                <div className="footer-section links">
                    <h2>{t("FooterComponent.QuickLinksTitle")}</h2>
                    <ul>
                        <li><a href="/#home">{t("FooterComponent.QuickLinksHomeLink")}</a></li>
                        <li><a href="/#">{t("FooterComponent.QuickLinksServicesLink")}</a></li>
                        <li><a href="/#about">{t("FooterComponent.QuickLinksAboutLink")}</a></li>
                        <li><a href="/#footer">{t("FooterComponent.QuickLinksContactLink")}</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h2>{t("FooterComponent.ContactUsTitle")}</h2>
                    <ul>
                        <li>{t("FooterComponent.ContactUsEmail")}</li>
                        <li>{t("FooterComponent.ContactUsPhone")}</li>
                        <li>{t("FooterComponent.ContactUsAddress")}</li>
                    </ul>
                </div>
                <div className="footer-section social">
                    <h2>{t("FooterComponent.FollowUsTitle")}</h2>
                    <ul>
                        <li><a href="#"><img src="/facebook.png" alt="Facebook" /></a></li>
                        <li><a href="#"><img src="/twitter.png" alt="Twitter" /></a></li>
                        <li><a href="#"><img src="/instagram.png" alt="Instagram" /></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; {t("FooterComponent.FooterBottom")}
            </div>
        </footer>
    );
}
