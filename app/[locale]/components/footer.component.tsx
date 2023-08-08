import { useTranslations } from "next-intl"


export default function Footer() {
    const t = useTranslations("Footer");
    return (
        <footer>
            <h1>{t('content')}</h1>
        </footer>
    )
}