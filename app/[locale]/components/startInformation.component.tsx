"use client"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react";
import LearnMoreButton from "./LearnMoreButton.component";

type Device = 'mobile' | 'laptop';
export default function StartInformation() {
    const t = useTranslations('StartInformation');
    const [device, setDeviceType] = useState<Device>();

    useEffect(() => {
        const scrrenWidth = window.innerWidth;
        const mobileMaxWidth = 480;
        if (scrrenWidth < mobileMaxWidth) {
            setDeviceType('mobile');

        } else {
            setDeviceType('laptop');
        }
    }, []);

    return (
        <>
            {device === 'mobile'
                ? <>
                    <div className='bg-bladerunnerMobile bg-no-repeat bg-cover h-[50vh] -mt-16 ' />
                    <div className="flex flex-col text-center gap-8 mt-6">
                        <div className="text-justify mx-[12%] text-[18px]">
                            {t('MobileInformation')}
                        </div>
                        <div className="mb-16"><LearnMoreButton href="#" /></div>
                    </div>
                </>
                :
                <div className="relative h-screen -mt-24">
                    <div className='bg-bladerunner bg-no-repeat bg-cover h-screen'>
                        <div className="flex flex-col gap-32 max-w-[30vw] ml-16 lg:pt-[38vh] relative z-10">
                            <div className="text-[35px]">{t('LaptopInformation')}</div>
                            <div><LearnMoreButton href="#" /></div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}