"use client"
import { useTranslations } from "next-intl";
import ScheduleItem from "./scheduleItem.component";
import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react";

const days = ["first day", "second day", "third day", "fourth day", "fifth day"];

export default function Schedule() {
    const t = useTranslations("Schedule");
    const [width, setWidth] = useState(0);
    const carousel = useRef<HTMLDivElement>();

    useEffect(() => {
        if (!carousel.current) return;

        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }, [])

    return (
        <div className="pl-8 lg:px-4">
            <motion.div
                exit={{ opacity: 0 }}
                ref={carousel as React.RefObject<HTMLDivElement>}
                whileTap={{ cursor: "grabbing" }}
                className="cursor-grab overflow-hidden">
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className="flex gap-4">
                    {days.map((day) => {
                        const themeName = t(`${day}.themeName`);
                        const speaker = t(`${day}.speaker`);
                        const dateTime = t(`${day}.dateTime`);
                        const place = t(`${day}.place`);

                        return (
                            <ScheduleItem
                                key={day}
                                themeName={themeName}
                                speaker={speaker}
                                dateTime={dateTime}
                                place={place}
                            />
                        );
                    })}

                </motion.div>
            </motion.div>
        </div>
    );
};