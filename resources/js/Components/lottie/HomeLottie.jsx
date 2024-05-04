import React from "react";
import { useLottie } from "lottie-react";
import animationData from "./Home_lottie.json";

const HomeLottie = () => {
    const options = {
        animationData,
        loop: true,
        autoplay: true,
        speed: 0.5,
        direction: -1,
    };

    const { View } = useLottie(options);
    return <div className="w-[750px] ml-10">{View}</div>;
};

export default HomeLottie;
