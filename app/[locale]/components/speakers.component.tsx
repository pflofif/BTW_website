"use client"

import { useTranslations } from "next-intl";
import SpeakerItem from "./speakerItem.component";

const speakers = ["first", "second", "third", "fourth", "fifth"]
export default function Speakers() {
    const t = useTranslations("Speakers");
    let columnIndex = 0;
    return (
        <div id="speakersSection">
            <h1 className="text-2xl text-center">{t('title')}</h1>
            <div className="lg:grid lg:grid-cols-5  lg:gap-4
                        flex flex-col gap-4 pt-4">
                {speakers.map(key => {
                    const name = t(`${key}.name`)
                    const position = t(`${key}.position`)
                    const additionalInformation = t(`${key}.additionalInformation`)

                    if (columnIndex >= 4) columnIndex = -1;
                    columnIndex = columnIndex + 2;

                    return (
                        <div className={`col-start-${columnIndex}`} key={key}>
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