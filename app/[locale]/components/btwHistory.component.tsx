import { useTranslations } from "next-intl";
import TitleText from "./titleText.component";
import TextWithLine from "./textWithLine.component";

export default function BtwHistory() {
    const t = useTranslations("BTW");
    return (
        <div className="border-[20px] rounded-[40px] mx-4 lg:border-[40px] lg:rounded-[80px] lg:mx-8 p-4 my-12">
            <TextWithLine titleText={t("HistoryTitle")} />

            <div className="lg:px-10 lg:text-[30px] text-center justify-center py-4" dangerouslySetInnerHTML={{ __html: t("History") }} />
        </div>
    )
}