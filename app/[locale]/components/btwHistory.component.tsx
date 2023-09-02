import { useTranslations } from "next-intl";
import TextWithLine from "./textWithLine.component";

export default function BtwHistory() {
    const t = useTranslations("BTW");
    return (
        <div className="bg-gradient-to-b from-[#9800B9] via-[#1900D2] to-[#2E00D1] py-3 px-2 lg:px-6 lg:py-3 mx-4 rounded-[40px] mt-8 lg:mt-24">
            <div className="bg-defaulPurple rounded-[40px] px-4 lg:px-0 pt-8 lg:pt-0">
                <div className="-pt-4"> <TextWithLine titleText={t("HistoryTitle")} /></div>

                <div className="lg:px-10 lg:text-[30px] text-center lg:text-left justify-center py-4" dangerouslySetInnerHTML={{ __html: t("History") }} />
            </div>
        </div>
    );
}
