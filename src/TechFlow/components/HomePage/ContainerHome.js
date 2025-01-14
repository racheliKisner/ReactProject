import { useTranslation } from 'react-i18next';

function ContainerHome() {
    const { t } = useTranslation();

    return (
        <>
            <header className="text-center my-4">
                <h1>{t('welcome')}</h1>
                <p>{t('description')}</p>
            </header>
            <main className="flex-grow-1">
                <section className="features mb-4">
                    <h2>{t('features')}</h2>
                    <p>{t('explore')}</p>
                </section>
            </main>
        </>
    );
}
export default  ContainerHome