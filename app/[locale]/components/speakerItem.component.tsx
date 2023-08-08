"use client"
import DefaultAvatar from "../../../public/DefaultAvatar.jpg"
import Image from "next/image"

interface Props {
    name: string
    position: string
    additionalInformation: string
}

export default function SpeakerItem({ name, position, additionalInformation }: Props) {
    return (
        <div className="flex flex-col ">
            <div className="grid gap-4 justify-center">
                <Image className="rounded-full min-h-[25vh] min-w-[65vw] lg:min-h-max lg:min-w-max" src={DefaultAvatar.src} alt="photo" width={150} height={100} />
                {informationContainer(name, position)}
            </div>
        </div>
    )
}

function informationContainer(name: string, position: string) {
    return (
        <div className="text-center">
            <h3>{name}</h3>
            <h3>{position}</h3>
        </div>
    )
}