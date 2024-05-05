import { Link, usePage } from "@inertiajs/react";
import { BsBasket } from "react-icons/bs";

const Navbar = ({ user }) => {
    const { url } = usePage();
    return (
        <div className="navbar bg-base-100 border-b-4 border-indigo-600 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link href={route("home")}>Home</Link>
                        </li>
                        <li>
                            <Link href={route("produk.index")}>Produk</Link>
                        </li>
                        <li>
                            <Link href={route("pelanggan.index")}>
                                Pelanggan
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link
                    className="btn btn-ghost text-xl font-bold text-indigo-500"
                    href={route("home")}
                >
                    Aplikasi Kasir <BsBasket className="animate-bounce" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold gap-1">
                    <li>
                        <Link
                            className={
                                url === "/home"
                                    ? "text-white bg-indigo-500 hover:bg-purple-500 hover:ring-1 animate-pulse"
                                    : "transition duration-300 hover:underline-offset-2 hover:underline decoration-2 decoration-indigo-500"
                            }
                            href={route("home")}
                        >
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={
                                url === "/produk"
                                    ? "text-white bg-indigo-500 hover:bg-purple-500 hover:ring-1 animate-pulse"
                                    : "transition duration-300 hover:underline-offset-2 hover:underline decoration-2 decoration-indigo-500"
                            }
                            href={route("produk.index")}
                        >
                            PRODUK
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={
                                url === "/pelanggan"
                                    ? "text-white bg-indigo-500 hover:bg-purple-500 hover:ring-1 animate-pulse"
                                    : "transition duration-300 hover:underline-offset-2 hover:underline decoration-2 decoration-indigo-500"
                            }
                            href={route("pelanggan.index")}
                        >
                            PELANGGAN
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={
                                url === "/penjualan"
                                    ? "text-white bg-indigo-500 hover:bg-purple-500 hover:ring-1 animate-pulse"
                                    : "transition duration-300 hover:underline-offset-2 hover:underline decoration-2 decoration-indigo-500"
                            }
                            // href={route("penjualan.index")}
                        >
                            PENJUALAN
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full ring-2 ring-indigo-500">
                            <img
                                alt="Logo Lanaa"
                                src="/images/LANAA.png"
                                width={100}
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link href={route("logout")} as="button">
                                Keluar
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
