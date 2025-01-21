import './Footer.css';

import '../../../i18n'
import { useTranslation } from 'react-i18next';
function Footer(){
    const { t } = useTranslation(); 
    return(
        <>
        <footer className="footer">
    <p>{t('&copy; 2025 TechFlow. כל הזכויות שמורות.')}</p>
        </footer>
        </>
    );
}
export default Footer;