import { useTranslations } from "next-intl"

interface Props {
    href: string
}
export default function LearnMoreButton({ href }: Props) {
    const t = useTranslations('BestInformation')

    return (
        <a href={href} target="_blank"
            className="border rounded-[100px] px-8 py-3 lg:px-12 lg:py-4 min-h-max
                            bg-gradient-button text-xl lg:text-[35px]
                          text-white">
            {t("learn more")}
        </a>
    )
}