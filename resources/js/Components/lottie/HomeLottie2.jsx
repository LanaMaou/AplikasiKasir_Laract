import React from "react";
import { useLottie } from "lottie-react";
import animationData from "./Home_lottie_2.json";

const HomeLottie2 = () => {
    const options = {
        animationData,
        loop: true,
        autoplay: true,
        speed: 0.5,
        direction: -1,
    };

    const { View } = useLottie(options);
    return (
        <div className="w-[780px] mb-20">{View}</div>
    );
};

export default HomeLottie2;
