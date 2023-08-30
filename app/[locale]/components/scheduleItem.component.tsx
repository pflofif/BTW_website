"use client"
import { motion } from "framer-motion"
import Image from "next/image";
interface ScheduleItem {
    themeName: string,
    speaker: string,
    imageSrc: string
}

export default function ScheduleItem({ themeName, speaker, imageSrc }: ScheduleItem) {
    return (
        <div>
            <Image src={imageSrc} alt="scehedule image" width={250} height={250} className={`w-[150px] h-[150px] lg:w-[250px] lg:h-[250px]`} />
            <div className="flex flex-col items-center justify-center pt-4 pb-2">
                <span className="text-[20px] lg:text-[25px]">{themeName}</span>
                <span className="text-[15px] lg:text-[20px]">{speaker}</span>
            </div>
        </div>
    );
};