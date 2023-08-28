"use client"
import { useTranslations } from "next-intl";
import TextWithLine from "./textWithLine.component";
import SplitLine from "./splitLine.component";
import TitleText from "./titleText.component";

const days = ["first day", "second day", "third day", "fourth day", "fifth day"];
function CustomTextWithLine({ text }: { text: string }) {
    return <div>
        <h1 className="text-center text-[20px] lg:text-[40px]">{text}</h1>
        <SplitLine />
    </div>
}
export default function Schedule() {
    const t = useTranslations("Schedule");

    return (

        <div id="scheduleSection" className="bg-gradient-to-l from-[#3840A2] via-[#EC49F7] to-[#FFFAFF] p-2 mx-4 rounded-[45px] mt-8 lg:mt-24">
            <div className="flex flex-col h-[80vh] bg-defaulPurple rounded-[45px]">
                <TextWithLine titleText={t("title")} />
                <CustomTextWithLine text={t("month")} />
            </div>
        </div>
    );
};