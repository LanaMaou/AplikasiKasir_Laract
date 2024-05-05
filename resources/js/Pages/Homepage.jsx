import { Head } from "@inertiajs/react";
import TypeIt from "typeit-react";
import { motion } from "framer-motion";
import Navbar from "@/Components/Navbar";
import Homelottie from "@/Components/lottie/HomeLottie";
import HomeLottie2 from "@/Components/lottie/HomeLottie2";

export default function Homepage(props) {
    const leftAnimate = {
        hidden: { opacity: 0, x: -500 },
        visible: { opacity: 1, x: 0 },
    };
    const rightAnimate = {
        hidden: { opacity: 0, x: 500 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-700 text-2xl flex-col overflow-hidden max-h-screen">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <h1 className="text-center font-bold mt-10 text-5xl text-transparent drop-shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text py-1">
                <TypeIt
                    getBeforeInit={(instance) => {
                        instance
                            .type("Selamat Datang Di Aplikasi Kasar")
                            .pause(750)
                            .delete(2)
                            .pause(500)
                            .type("ir :)")
                            .pause(1000);

                        // Remember to return it!
                        return instance;
                    }}
                    options={{ loop: true }}
                />
            </h1>
            <div className="w-screen flex justify-center items-center overflow-hidden max-h-[90vh] mt-10 lg:mt-0">
                <motion.div
                    variants={leftAnimate}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <Homelottie />
                </motion.div>
                <motion.div
                    variants={rightAnimate}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <HomeLottie2 />
                </motion.div>
            </div>
        </div>
    );
}
