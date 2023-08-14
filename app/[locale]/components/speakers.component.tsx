"use client"

import { useTranslations } from "next-intl";
import SpeakerItem from "./speakerItem.component";

const speakers = ["first", "second", "third", "fourth", "fifth"]
export default function Speakers() {
    const t = useTranslations("Speakers");

    return (
        <div id="speakersSection">
            <h1 className="text-2xl text-center">{t('title')}</h1>
            <div className="lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-12
                            md:grid md:grid-cols-2 md:grid-rows-4 md:gap-8
                            flex flex-col gap-12 pt-4">
                {speakers.map(key => {
                    const name = t(`${key}.name`)
                    const position = t(`${key}.position`)
                    const additionalInformation = t(`${key}.additionalInformation`)

                    return (
                        <div className={``} key={key}>
                            <SpeakerItem
                                name={name}
                                position={position}
                                additionalInformation={additionalInformation} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}