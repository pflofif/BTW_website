"use client"
import Image from "next/image"

interface Props {
    name: string
    position: string
    additionalInformation: string
    srcImage: string
}

export default function SpeakerItem({ name, position, additionalInformation, srcImage }: Props) {
    return (
        <div className="shadow-[0px_0px_10px_rgba(236,73,247,_1)] bg-defaultPurple border-4 border-black m-4">
            <Image src={srcImage} alt='speaker Image' width={500} height={700} className="px-8 pt-8" />

            <div className="flex flex-col items-center justify-center pt-8 pb-4">
                <span className="text-[25px]">{name}</span>
                <span className="text-[20px]">{position}</span>
            </div>
        </div>
    )
}