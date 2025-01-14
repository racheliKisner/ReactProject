
import Container from "../container/ContainerComponent";
import Footer from "../Footer/FooterCopmponent";
import React from 'react';
import { useTranslation } from 'react-i18next'; // מייבא את useTranslation

function About() {
    const { t } = useTranslation(); // מחזיר את פונקציית t
    return (
        <>
            <div className="container">
                 
                <h1>{t('About.descrption')}</h1> 
                
                <Footer />
            </div>
        </>
    );
}

export default About;
