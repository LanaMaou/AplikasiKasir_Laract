import { Head } from "@inertiajs/react";
import Navbar from "./Navbar";

export default function ShowData(props) {
    const { children } = props;
    return (
        <div className="min-h-screen bg-slate-50 text-slate-700 text-2xl flex-col">
            <Head title={props.title} />
            <Navbar user={props.user} />
            <div className="flex w-full justify-center items-center flex-col">
                <div className="mt-2 w-full flex items-center flex-col">
                    <h1 className="text-center font-semibold text-4xl">
                        {props.title}
                    </h1>
                    {children}
                </div>
            </div>
        </div>
    );
}
