"use client"
import { useTranslations } from "next-intl";
import SplitLine from "./splitLine.component";
import ScheduleItem from "./scheduleItem.component";
import TextWithLine from "./textWithLine.component";
import { useEffect, useState } from "react";

interface Schedule {
    themeName: string,
    speaker: string,
    imageSrc: string
}

interface DateAndTime {
    day: string;
    date: string;
}

interface ScheduleItemWithDayAndTime {
    scheduleData: Schedule,
    dayAndTime: DateAndTime;
}

const days = ["first day", "second day", "third day", "fourth day", "fifth day"];
function CustomTextWithLine({ text }: { text: string }) {
    return <div>
        <h1 className="text-center text-[20px] lg:text-[30px]">{text}</h1>
        <SplitLine />
    </div>
}

function ElementsInRowWithSpace({ elements }: { elements: string[] }) {
    return (
        <div>
            <div className="flex flex-row justify-around text-[25px]">
                {
                    elements.map((el, index) => {
                        return <ul key={index}>{el}</ul>
                    })
                }
            </div>
            <SplitLine />
        </div>
    )
}
function ScheduleItemWithDayOnTop({ scheduleData, dayAndTime }: ScheduleItemWithDayAndTime) {
    if (scheduleData === undefined || dayAndTime === undefined) return [];

    return (
        <div>
            <div className="py-3">
                <span className="text-[20px] pr-2">{dayAndTime.date}</span>
                <span className="text-[15px]">{dayAndTime.day}</span>
            </div>
            <ScheduleItem {...scheduleData} ></ScheduleItem>
        </div>
    )
}
function ParseScheduleItems(t: any): Schedule[] {
    return days.map(el => {
        return {
            themeName: t(`${el}.themeName`),
            speaker: t(`${el}.speaker`),
            imageSrc: t(`${el}.imageSrc`)
        }
    })
}
function ParseScheduleItemsWithDayAndTime(t: any): ScheduleItemWithDayAndTime[] {
    const datesList = days.map(el => t(`${el}.date`));
    const daysList = days.map(el => t(`${el}.dayName`));
    const DateAndTime: DateAndTime[] = daysList.map((day, index) => ({
        day,
        date: datesList[index],
    }));
    const schedule: Schedule[] = ParseScheduleItems(t);
    return schedule.map((scheduleData, index) => ({
        scheduleData,
        dayAndTime: DateAndTime[index],
    }));

}
type Device = 'mobile' | 'laptop';
export default function Schedule() {
    const t = useTranslations("Schedule");
    const dates = days.map(el => t(`${el}.date`));
    const daysNames = days.map(el => t(`${el}.dayName`));
    const [scheduleItems, setScheduleItems] = useState<Schedule[] | ScheduleItemWithDayAndTime[]>([]);
    const [deviceType, setDeviceType] = useState<Device>();

    useEffect(() => {
        const scrrenWidth = window.innerWidth;
        const mobileMaxWidth = 480;
        if (scrrenWidth < mobileMaxWidth) {
            setDeviceType('mobile');
            setScheduleItems(ParseScheduleItemsWithDayAndTime(t));

        } else {
            setDeviceType('laptop');
            setScheduleItems(ParseScheduleItems(t));
        }
    }, []);

    return (

        <div id="scheduleSection" className="bg-gradient-to-l from-[#3840A2] via-[#EC49F7] to-[#FFFAFF] p-1.5 lg:p-2 mx-4 rounded-[45px] mt-8 lg:mt-24 mb-12 lg:mb-0">
            {deviceType === 'laptop' ?
                <div className="flex flex-col  bg-defaulPurple rounded-[45px]">
                    <TextWithLine titleText={t("title")} />
                    <CustomTextWithLine text={t("month")} />
                    <ElementsInRowWithSpace elements={dates} />
                    <ElementsInRowWithSpace elements={daysNames} />
                    <div className="flex flex-row justify-around w-full m-auto my-8">
                        {
                            (scheduleItems as Schedule[]).map((schedule, index) => {
                                return (
                                    <ScheduleItem {...schedule} key={index}></ScheduleItem>
                                )
                            })
                        }
                    </div>
                </div> :
                <div className="bg-defaulPurple rounded-[45px]">
                    <TextWithLine titleText={t("title")} />
                    <div className="flex flex-col items-center justify-center mx-[5%]">
                        <div className="flex flex-row gap-4">{
                            (scheduleItems as ScheduleItemWithDayAndTime[]).slice(0, 2).map((schedule, index) => {
                                return (
                                    <ScheduleItemWithDayOnTop {...schedule} key={index}></ScheduleItemWithDayOnTop>
                                )
                            })
                        }
                        </div>
                        <div className="flex flex-row gap-4">{
                            (scheduleItems as ScheduleItemWithDayAndTime[]).slice(2, 4).map((schedule, index) => {
                                return (
                                    <ScheduleItemWithDayOnTop {...schedule} key={index}></ScheduleItemWithDayOnTop>
                                )
                            })
                        }
                        </div>
                        <div className="flex items-center justify-center">{
                            <ScheduleItemWithDayOnTop {...(scheduleItems[4] as ScheduleItemWithDayAndTime)} key={"lastSchedule"}></ScheduleItemWithDayOnTop>
                        }
                        </div>
                    </div>
                </div>}
        </div>
    );
};