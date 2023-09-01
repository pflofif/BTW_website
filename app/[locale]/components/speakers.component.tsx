"use client"

import { useTranslations } from "next-intl";
import SpeakerItem from "./speakerItem.component";
import TextWithLine from "./textWithLine.component";
import SpeakerScroller from "./speakerScroller.components";
import ShadowBorder from "./shadowBorder.component";

const days = ["first", "second", "third", "fourth", "fifth"]
export default function Speakers() {
    const t = useTranslations("Speakers");

    const speakers = days.map((day, index) => {
        const name = t(`${day}.name`)
        const position = t(`${day}.position`)
        const additionalInformation = t(`${day}.additionalInformation`)
        const imgSrc = t(`${day}.imageSrc`);

        return (
            <SpeakerItem key={index}
                srcImage={imgSrc}
                name={name}
                position={position}
                additionalInformation={additionalInformation} />

        )
    })

    return (
        <div id="speakersSection" className="pb-8 lg:pb-24">
            <TextWithLine titleText={t("title")} />

            <SpeakerScroller content={speakers} />
        </div>
    )
}