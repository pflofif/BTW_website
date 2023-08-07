'use client'
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"

import Image from 'next/image';
import openNavBarInMobile from "../../../public/openNavBarInMobile.svg"
import closeNavbarInMobile from "../../../public/closeNavbarInMobile.svg"

const navigation = ["who we", "schedule", "speakers"];

export default function Header() {
    const t = useTranslations("Header");
    const [isNavbarOpen, setNavbar] = useState(false);

    useEffect(() => {
        const scrrenWidth = window.innerWidth;
        const mobileAndTableMaxSize = 768;
        if (scrrenWidth > mobileAndTableMaxSize) {
            setNavbar(true);
        }
    }, [])

    return (
        <header className="sticky top-0">

            <nav className="w-full bg-white">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <a href="#">
                                <h2 className="text-2xl font-bold">{t('BTW')}</h2>
                            </a>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!isNavbarOpen)}>
                                    <Image priority src={(isNavbarOpen ? openNavBarInMobile : closeNavbarInMobile)} alt="Photo" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <AnimatePresence>
                            {isNavbarOpen && (
                                <motion.div
                                    className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 overflow-hidden`}
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}>
                                    <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                        {navigation.map(key => (
                                            <li key={key} className="text-gray-600 hover:text-blue-600">
                                                <a href="#">{t(`navigation.${key}`)}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}

                        </AnimatePresence>
                    </div>
                </div>
            </nav>
        </header>
    )
};
