import React, { useState } from "react";
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ChevronLeftIcon } from "@heroicons/react/solid";
import { ChevronRightIcon } from "@heroicons/react/solid";

const detailsCard = [
    {
        id: 1,
        amount: 5553,
        link: "xyz",
        status: 1
    },
    {
        id: 2,
        amount: 500,
        link: "abc",
        status: 0
    },
    {
        id: 3,
        amount: 4503,
        link: "advkjn",
        status: 0
    },
    {
        id: 4,
        amount: 7553,
        link: "iuh",
        status: 0
    },
    {
        id: 5,
        amount: 9313,
        link: "kajb",
        status: 0
    },
    // {
    //     id: 6,
    //     amount: 7553,
    //     link: "iuh",
    //     status: 0
    // },
    // {
    //     id: 7,
    //     amount: 9313,
    //     link: "kajb",
    //     status: 0
    // },
    // {
    //     id: 8,
    //     amount: 9313,
    //     link: "kajb",
    //     status: 0
    // },
    // {
    //     id: 9,
    //     amount: 9313,
    //     link: "kajb",
    //     status: 0
    // }
];

export default function Carousel() {
    // const [oldSlide, setOldSlide] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);
    // const [activeSlide2, setActiveSlide2] = useState(0);
    const active = "#3751FF";
    const inactive = "#969BA0";
    const [sliderRef, setSliderRef] = useState(null);

    const sliderSettings = {
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        beforeChange: (current, next) => {
            // setOldSlide(current);
            setActiveSlide(next)
        },
        // afterChange: current => setActiveSlide2(current)
    }
    const totalActiveSlide = detailsCard.length < 4 ? 0 : detailsCard.length - 4;
    // console.log("Old " + oldSlide);
    // console.log("Active " + activeSlide);
    // console.log("Active2 " + activeSlide2);
    return (
        <div className="w-[1128px] relative" >
            {(activeSlide !== 0) &&
                <button className="bg-white shadow absolute left-0 top-16 rounded-full p-4 " >
                    <ChevronLeftIcon className="w-5 h-5 text-[#3751FF]"
                        aria-hidden="true" onClick={sliderRef?.slickPrev} />
                </button>
            }
            <div className="px-14" >
                <Slider ref={setSliderRef} {...sliderSettings}>
                    {detailsCard.map((card, id) => (
                        <div key={id}>
                            <div className={`w-[245px] cursor-pointer h-[184px] top-[393px] left-[440px] flex flex-col items-center justify-center border-solid border-2 border-[${card.status === 1 ? active : inactive}]`}>
                                {card.status === 1 && <p className="text-[#3751FF]" ><span className="bg-[#3751FF] rounded-full inline-block mr-2 w-3 h-3"></span>On going</p>}
                                <h1 className="text-[18px] font-[500] text-[#000000] my-2">Campaign : {card.id}</h1>
                                <div className={`text-[${card.status === 1 ? active : inactive}] border-[${card.status === 1 ? active : inactive}] font-bold border-2 border-dashed w-[165px] h-[42px] top-[473px] left-[485px] flex items-center justify-center`}>
                                    <h1>&#8377;{card.amount}</h1>
                                </div>
                                <h1 className={`text-[${card.status === 1 ? active : inactive}] underline mt-4 cursor-pointer`}>Click here</h1>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            {(activeSlide !== totalActiveSlide) &&
                <button className="bg-white absolute right-0 shadow top-16 rounded-full p-4 " >
                    <ChevronRightIcon className="w-5 h-5 text-[#3751FF]"
                        aria-hidden="true" onClick={sliderRef?.slickNext} />
                </button>
            }
            {/* <button className="bg-white absolute right-0 shadow top-16 rounded-full p-4 " >
                <ChevronRightIcon className="w-5 h-5 text-[#3751FF]"
                    aria-hidden="true" onClick={sliderRef?.slickNext} />
            </button> */}

        </div>
    );
}