"use client"
import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import images from "../helpers/images";

export default function BtwInformation() {
    const t = useTranslations('BTW');
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (carousel.current) {
                const nextIndex = (currentIndex + 1) % images.length;
                carousel.current.scrollTo({
                    left: nextIndex * carousel.current.offsetWidth,
                    behavior: "smooth"
                });
                setCurrentIndex(nextIndex);
            }
        }, 2500);

        return () => clearInterval(interval);

    }, [currentIndex]);

    return (
        <div id="btwInformationSection" className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 items-center">
            <div className="flex justify-center items-center select-none">
                <div ref={carousel} className="flex w-[80vw]  h-[38vh] px-[5%] overflow-x-scroll snap-x snap-mandatory no-scrollbar
                        lg:w-[20rem] lg:h-[22rem] 
                        md:w-[24rem] md:h-[22rem]">
                    {images.map((img, key) =>
                        <Image key={key} className="min-h-[38vh] min-w-[80vw] snap-center
                         lg:min-h-[20rem] lg:min-w-[20rem] 
                         md:min-h-[20rem] md:min-w-[24rem] md:pl-8" src={img.src} alt="BTW logo" width={370} height={185} />)}
                </div>
            </div>
            <div className="px-[10%] md:px-[5%] lg:text-xl" dangerouslySetInnerHTML={{ __html: t("Information") }} />
        </div>
    )
}