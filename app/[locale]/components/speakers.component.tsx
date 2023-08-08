"use client"

import { useTranslations } from "next-intl";
import SpeakerItem from "./speakerItem.component";

const speakers = ["first", "second", "third", "fourth", "fifth"]
export default function Speakers() {
    const t = useTranslations("Speakers");

    return (
        <div className="lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-4 flex flex-col gap-4 pt-4">
            {speakers.map(key => {
                const name = t(`${key}.name`)
                const position = t(`${key}.position`)
                const additionalInformation = t(`${key}.additionalInformation`)

                return <SpeakerItem
                    key={key}
                    name={name}
                    position={position}
                    additionalInformation={additionalInformation} />

            })}
        </div>
    )
}