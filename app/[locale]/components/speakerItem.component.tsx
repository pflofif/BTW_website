"use client"
import React, { useState } from "react"
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
            <>
                <div className="grid gap-4 justify-center">
                    <Image
                        onClick={() => setShowModal(true)}
                        className="rounded-full min-h-[15vh] min-w-[55vw] hover:cursor-pointer
                                    lg:min-w-[20vw] lg:min-h-[10vh]
                                    xl:min-w-[16vw] xl:min-h-[8vh]
                                    md:min-w-[30vw] md:min-h-[15vh]"
                        src={DefaultAvatar.src} alt="photo" width={150} height={100} />

                    <div className="text-center">
                        <h3>{name}</h3>
                        <h3>{position}</h3>
                    </div>

                </div>
            </>

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