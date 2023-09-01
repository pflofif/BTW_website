'use client'
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { useLocale } from 'next-intl';
import { Link as ScrollLink } from "react-scroll";
import LanguageSwitcher from "./languageSwitcher.component";
import BtwLogo from "../../../public/bTw.png"
import Image from "next/image";

const navigation = ["who we", "schedule", "speakers"];

const Menu = (t: any) => {
    const locale = useLocale();

    return <div className="flex flex-col items-center justify-center space-y-4 lg:flex-row lg:space-x-6 lg:space-y-0 md:flex-row  md:space-x-6 md:space-y-0">
        {navigation.map(key => {
            const title = t(`navigation.${key}.title`);
            const href = t(`navigation.${key}.href`);
            return <ScrollLink
                className="text-white hover:text-blue-600 text-2xl lg:text-[30px]"
                key={key}
                to={href}
                smooth={true}
                offset={-110}
            >
                {title}
            </ScrollLink>
        })}
        <LanguageSwitcher className='text-2xl lg:text-[30px]' lang={locale} />
    </div>
}

type BackgroundColor = 'bg-transient' | 'bg-gradient-to-b from-[#000000] to-[#1A0D28]';

export default function Header() {
    const t = useTranslations('Header');
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [scrollBg, setScrollBg] = useState<BackgroundColor>('bg-transient');

    useEffect(() => {
        const handleScroll = () => {
            const windowH = window.innerHeight;
            const h = (window.innerWidth >= 480 ? windowH - 100 : windowH / 2 - 64);
            if (window.scrollY > h) {
                setScrollBg('bg-gradient-to-b from-[#000000] to-[#1A0D28]');
            } else {
                setScrollBg('bg-transient');
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`z-40 sticky top-0 ${showMobileMenu ? 'bg-gradient-to-b from-[#000000] to-[#1A0D28]' : scrollBg}`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between h-16 lg:h-24">
                <Image className="w-[100px] h-[35px] ml-4 lg:ml-0 lg:w-[182px] lg:h-[54px]" src={BtwLogo.src} alt="btw logo"
                    width={300} height={100} />
                <div className="hidden md:block">
                    {Menu(t)}
                </div>
                <button
                    type="button"
                    className="md:hidden bg-transient inline-flex items-center justify-center p-2 rounded-md text-gray-400 transition duration-150 ease-in-out"
                    onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>
            </div>
            <div className="md:hidden">
                {showMobileMenu && Menu(t)}
            </div>
        </nav>
    );
};

