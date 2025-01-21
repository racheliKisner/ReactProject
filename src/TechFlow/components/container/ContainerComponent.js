import './ContainerComponent.css'
import '../../../i18n'
import { useTranslation } from 'react-i18next';
function Container(){
    const { t } = useTranslation(); 
    return(
        <>
        <container className="container">{t('container')}</container>
        </>
    );
}
export default Container;