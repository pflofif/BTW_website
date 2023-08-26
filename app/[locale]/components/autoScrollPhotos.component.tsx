import { StaticImageData } from "next/dist/shared/lib/get-img-props"
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
    images: StaticImageData[]
}

export default function AutoScrollPhotos({ images }: Props) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500
    };

    return (
        <Slider {...settings} className="max-w-[80vw] lg:max-w-[35vw]">
            {images.map((img, index) => {
                return <Image key={index} src={img.src} alt="BTW photo" width={"500"} height={"300"} />
            })}
        </Slider>
    );
}