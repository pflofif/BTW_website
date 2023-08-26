interface Props {
    text: string
}
export default function TitleText({ text }: Props) {
    return <h1 className="text-center text-[60px]">{text}</h1>
}