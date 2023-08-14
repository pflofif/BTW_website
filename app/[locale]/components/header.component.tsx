'use client'
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"

import Image from 'next/image';
import openNavBarInMobile from "../../../public/navigation-bar.png"
import closeNavbarInMobile from "../../../public/icons8-close-50.png"
import { useLocale } from 'next-intl';
import LanguageSwitcher from "./languageSwitcher.component";
import { Link as ScrollLink } from 'react-scroll';

const navigation = ["who we", "schedule", "speakers"];

export default function Header() {
    const t = useTranslations("Header");
    const lang = useLocale();
    const [isNavbarOpen, setNavbar] = useState(false);
    useEffect(() => {
        const scrrenWidth = window.innerWidth;
        const mobileMaxWidth = 425;
        if (scrrenWidth > mobileMaxWidth) {
            setNavbar(true);
        }
    }, [])

    return (
        <header className="z-10 sticky top-0 ">

            <nav className="w-full bg-white">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <a href="#">
                                <h2 className="text-2xl font-bold">{t('BTW')}</h2>
                            </a>
                            <div className="flex flex-row gap-4 items-center lg:hidden md:hidden">
                                <LanguageSwitcher lang={lang} />
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!isNavbarOpen)}>
                                    <Image src={isNavbarOpen ? closeNavbarInMobile.src : openNavBarInMobile.src} alt="close" width={20} height={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 ">
                        <LanguageSwitcher className="hidden lg:block md:block" lang={lang} />
                        <div>
                            <AnimatePresence>
                                {isNavbarOpen && (
                                    <motion.div
                                        className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 overflow-hidden`}
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}>
                                        <ul className="flex flex-col items-center justify-center space-y-8
                                        lg:flex-row lg:space-x-6 lg:space-y-0
                                        md:flex-row  md:space-x-6 md:space-y-0">
                                            {navigation.map(key => {
                                                const title = t(`navigation.${key}.title`);
                                                const href = t(`navigation.${key}.href`);
                                                return <ScrollLink
                                                    className="text-gray-600 hover:text-blue-600"
                                                    key={key}
                                                    to={href}
                                                    smooth={true}
                                                    offset={-100}
                                                >
                                                    {title}
                                                </ScrollLink>
                                            })}
                                        </ul>
                                    </motion.div>
                                )}

                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
};

