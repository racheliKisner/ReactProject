import React from 'react';
import { useTranslation } from 'react-i18next';

function HomePage()
{
    const { t } = useTranslation();
    return(
        

        <>
        <div className="container">

        <div>
      <h1>{t('welcome')}</h1>
      <p>{t('thank_you')}</p>
    </div>

<button className="btn btn-success">Click Me!</button>

</div>
        </>

    );
}
export default HomePage;