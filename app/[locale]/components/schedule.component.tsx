"use client"
import { useTranslations } from "next-intl";
import SplitLine from "./splitLine.component";
import ScheduleItem from "./scheduleItem.component";
import TextWithLine from "./textWithLine.component";

interface ScheduleItem {
    themeName: string,
    speaker: string,
    imageSrc: string
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
function ParseScheduleItems(t: any): ScheduleItem[] {
    return days.map(el => {
        return {
            themeName: t(`${el}.themeName`),
            speaker: t(`${el}.speaker`),
            imageSrc: t(`${el}.imageSrc`)
        }
    })
}
export default function Schedule() {
    const t = useTranslations("Schedule");
    const dates = days.map(el => t(`${el}.date`));
    const daysNames = days.map(el => t(`${el}.dayName`));
    const scheduleItems: ScheduleItem[] = ParseScheduleItems(t);

    return (

        <div id="scheduleSection" className="bg-gradient-to-l from-[#3840A2] via-[#EC49F7] to-[#FFFAFF] p-2 mx-4 rounded-[45px] mt-8 lg:mt-24">
            <div className="flex flex-col h-[80vh] bg-defaulPurple rounded-[45px]">
                <TextWithLine titleText={t("title")} />
                <CustomTextWithLine text={t("month")} />
                <ElementsInRowWithSpace elements={dates} />
                <ElementsInRowWithSpace elements={daysNames} />
                {/*TODO: Add mobile adaptation*/}
                <div className="flex flex-row justify-around w-full m-auto pt-4">
                    {
                        scheduleItems.map((schedule, index) => {
                            return (
                                <ScheduleItem {...schedule} key={index}></ScheduleItem>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};