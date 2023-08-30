"use client"
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Arrow from "../../../public/arrow.png"
import Image from "next/image";

interface Props {
    content: JSX.Element[]
}

export default function SpeakerScroller({ content }: Props) {
    const [slidestoShow, setSlidesToShow] = useState<number>(1);
    const slider = useRef<Slider>(null);
    useEffect(() => {
        if (window.innerWidth <= 480) {
            setSlidesToShow(1)
        } else {
            setSlidesToShow(3)
        }
    }, [])

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidestoShow,
        slidesToScroll: 1
    };

    const arrowClass = 'cursor-pointer max-h-[18vh] max-w-[28vw] lg:h-[130px] lg:w-[200px]'
    return (
        <>
            <Slider ref={slider} {...settings} className="w-[85vw] m-auto pt-4 pb-4 lg:pt-12 lg:pb-12">
                {content}
            </Slider>
            <div className="flex justify-between text-2xl mx-8 lg:mx-16">

                <Image className={arrowClass}
                    src={Arrow.src} alt="left img"
                    width={300} height={300}
                    onClick={() => slider?.current?.slickPrev()} />

                <Image className={`rotate-180 ${arrowClass}`}
                    src={Arrow.src} alt="right img"
                    width={300} height={300}
                    onClick={() => slider?.current?.slickNext()} />

            </div>
        </>
    );
}