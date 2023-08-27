"use client"
import { useEffect, useState } from "react";
import { StaticImageData } from "next/dist/shared/lib/get-img-props"
import { useTranslations } from "next-intl";
import BtwImages from "../helpers/prevBtwImages";
import CoreteamImages from "../helpers/coretramImages"
import ShadowBorder from "./shadowBorder.component";
import AutoScrollPhotos from "./autoScrollPhotos.component";

type Device = 'mobile' | 'laptop';
export default function BtwInformation() {
    const t = useTranslations('BTW');
    const [images, setImages] = useState<StaticImageData[]>([]);
    const [deviceType, setDeviceType] = useState<Device>();

    useEffect(() => {
        const scrrenWidth = window.innerWidth;
        const mobileMaxWidth = 480;
        if (scrrenWidth < mobileMaxWidth) {
            setImages(BtwImages.concat(CoreteamImages));
            setDeviceType('mobile')
        } else {
            setDeviceType('laptop')
        }
    }, []);

    return (
        <> {deviceType === 'mobile' ? (
            <div id="btwInformationSection" className="flex flex-col gap-8">

                <div className="px-[10%] md:px-[10%] lg:text-[25px] justify-center " dangerouslySetInnerHTML={{ __html: t("Information") }} />

                <div className={`flex justify-center items-center select-none`}>
                    <ShadowBorder>
                        <AutoScrollPhotos images={images} />
                    </ShadowBorder>
                </div>

                <div className="px-[10%] md:px-[10%] lg:text-[25px] justify-center " dangerouslySetInnerHTML={{ __html: t("AdditionalInfo") }} />
            </div>
        ) : (
            <div id="btwInformationSection" className="grid lg:grid-rows-2 gap-24 items-center">

                <div className="lg:grid lg:grid-cols-2">
                    <div className={`flex justify-center items-center select-none`}>
                        <ShadowBorder>
                            <AutoScrollPhotos images={BtwImages} />
                        </ShadowBorder>
                    </div>

                    <div className="px-[10%] md:px-[10%] lg:text-[25px] justify-center " dangerouslySetInnerHTML={{ __html: t("Information") }} />
                </div>

                <div className="lg:grid lg:grid-cols-2">
                    <div className="px-[10%] md:px-[10%] lg:text-[25px] justify-center " dangerouslySetInnerHTML={{ __html: t("AdditionalInfo") }} />


                    <div className={`flex justify-center items-center select-none }`}>
                        <ShadowBorder>
                            <AutoScrollPhotos images={CoreteamImages} />
                        </ShadowBorder>
                    </div>
                </div>
            </div>
        )}</>
    )
}