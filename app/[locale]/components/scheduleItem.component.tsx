"use client"
import { motion } from "framer-motion"
import Image from "next/image";
interface ScheduleItem {
    themeName: string,
    speaker: string,
    imageSrc: string
}

export default function ScheduleItem({ themeName, speaker, imageSrc }: ScheduleItem) {
    const sideSize = "[210px]"
    return (
        <div>
            <Image src={imageSrc} alt="scehedule image" width={220} height={220} className={`w-${sideSize} h-${sideSize}`} />
            <div className="flex flex-col items-center justify-center pt-4 pb-2">
                <span className="text-[25px]">{themeName}</span>
                <span className="text-[20px]">{speaker}</span>
            </div>
        </div>
    );
};