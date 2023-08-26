import SplitLine from "./splitLine.component";
import TitleText from "./titleText.component";

interface Props {
    titleText: string
}

export default function TextWithLine({ titleText }: Props) {
    return <div>
        <TitleText text={titleText} />
        <SplitLine />
    </div>
}