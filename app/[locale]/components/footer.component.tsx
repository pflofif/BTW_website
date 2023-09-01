'use client'
import Footering from "../../../public/footer.png";
import BtwLogo from "../../../public/bTw.png";
import Image from "next/image";
import Medias from '../helpers/socialMediaImages';
import { useEffect, useState } from "react";

export default function Footer() {
    const [btwLogoSize, setBtwLogoSize] = useState<number>(0);
    const [socialMediaLogoSize, setSocialMediaLogoSize] = useState<number>(0);
    useEffect(() => {
        const IsLaptop = window.innerWidth >= 480;
        setBtwLogoSize(IsLaptop ? 240 : 60);
        setSocialMediaLogoSize(IsLaptop ? 60 : 17);
    }, [])
    return (
        <footer className="bg-defaulPurple sticky">
            <Image src={Footering.src} alt="footer" height={100} width={1920} />

            <div className="absolute top-2 flex items-center justify-between w-full px-1.5 lg:px-6 lg:pt-8">
                <Image src={BtwLogo.src} alt="btw logo" height={btwLogoSize} width={btwLogoSize} />

                <div className="flex flex-row gap-2 lg:gap-8">
                    {Medias.map((media, index) => (
                        <a href={`${media.href}`} target="_blank" key={index}>
                            <Image src={media.img} alt="media" width={socialMediaLogoSize} height={socialMediaLogoSize} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
