"use client"
import { useState } from "react"
import DefaultAvatar from "../../../public/DefaultAvatar.jpg"
import Image from "next/image"
import SpeakerInformationModal from "./speakerInformationModal.component"
import { AnimatePresence } from "framer-motion"

interface Props {
    name: string
    position: string
    additionalInformation: string
}

export default function SpeakerItem({ name, position, additionalInformation }: Props) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div
                className="flex flex-col hover:cursor-pointer"
                onClick={() => setShowModal(true)}>
                <div className="grid gap-4 justify-center">
                    <Image className="rounded-full min-h-[25vh] min-w-[65vw] lg:min-h-max lg:min-w-max "
                        src={DefaultAvatar.src} alt="photo" width={150} height={100} />
                    {informationContainer(name, position)}
                </div>
            </div>

            <AnimatePresence>
                {showModal && (
                    <SpeakerInformationModal
                        name={name}
                        information={additionalInformation}
                        onClose={() => setShowModal(false)} />
                )}
            </AnimatePresence>
        </>
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