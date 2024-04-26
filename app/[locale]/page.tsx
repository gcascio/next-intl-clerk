import { useTranslations } from 'next-intl';
 
export default function Index({
    params: { locale },
  }: Readonly<{
    params: { locale: string };
  }>) {
  const t = useTranslations('home');
  return (
    <>
        <h1>{t('title')}</h1>
        <a href={`/${locale}/dashboard`}>{t('toDashboard')}</a>
    </>
  );
}