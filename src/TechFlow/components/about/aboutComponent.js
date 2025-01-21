
import Container from "../container/ContainerComponent";
import Footer from "../Footer/FooterCopmponent";
import React from 'react';
import { useTranslation } from 'react-i18next'; // מייבא את useTranslation
import '../../../i18n'
function About() {
    const { t } = useTranslation(); // מחזיר את פונקציית t
    return (
        <>
            <div className="container">
                 
                <h1>{t('descrption')}</h1> 
                
                <Footer />
            </div>
        </>
    );
}

export default About;
