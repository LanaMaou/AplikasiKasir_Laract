import { Head } from "@inertiajs/react";
import Navbar from "./Navbar";
import ShowAlert from "./ShowAlert";
import { useEffect, useState } from "react";

export default function ShowData({ children, ...props }) {
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (props.message) {
            setShowAlert(true);
        } else {
            setShowAlert(false);
        }
    }, [props.message]);

    const handleClickAlert = () => {
        setShowAlert(false);
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-700 text-2xl flex-col">
            <Head title={props.title} />
            <Navbar user={props.user} />
            <div className="flex w-full justify-center items-center flex-col">
                <div className="mt-2 w-full flex items-center flex-col">
                    {showAlert && (
                        <ShowAlert
                            message={props.message}
                            onClick={() => handleClickAlert()}
                        />
                    )}
                    <h1 className="text-center font-bold text-4xl drop-shadow-lg">
                        {props.title}
                    </h1>
                    {children}
                </div>
            </div>
        </div>
    );
}
