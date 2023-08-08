"use client"
import { motion } from "framer-motion"
interface Props {
    themeName: string;
    speaker: string;
    dateTime: string;
    place: string;
}

const ScheduleItem = ({ themeName, speaker, dateTime, place }: Props) => {
    return (
        <motion.div
            className="lg:min-w-[48vw] lg:min-h-[80vh]
                        min-w-[85vw] min-h-[80vh] bg-red-800 rounded-md">
            <h1 className="text-white text-xl mb-2">{themeName}</h1>
            <p className="text-white">{speaker}</p>
            <p className="text-white">{dateTime}</p>
            <p className="text-white">{place}</p>
        </motion.div>
    );
};

export default ScheduleItem;
