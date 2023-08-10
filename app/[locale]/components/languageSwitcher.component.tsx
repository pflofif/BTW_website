import Link from "next/link";

export default function LanguageSwitcher({ lang, className }: { lang: string, className?: string }) {
    return (
        <div className={`${className}`}>
            {lang === 'ua' ? <Link href={{
                pathname: `/en`
            }}>TO EN</Link> : <Link href={{
                pathname: "/ua"
            }}>TO UA</Link>}
        </div>
    );
}