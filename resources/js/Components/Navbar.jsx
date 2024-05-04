import { Link, usePage } from "@inertiajs/react";

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
                            <a>Item 1</a>
                        </li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li>
                                    <a>Submenu 1</a>
                                </li>
                                <li>
                                    <a>Submenu 2</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a>Item 3</a>
                        </li>
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl font-bold text-indigo-500" href={route("home")}>
                    Aplikasi Kasir
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold gap-1">
                    <li>
                        <Link
                            className={
                                url === "/home"
                                    ? "text-white bg-indigo-500 hover:bg-purple-500 hover:ring-1"
                                    : ""
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
                                    ? "text-white bg-indigo-500 hover:bg-purple-500 hover:ring-1"
                                    : ""
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
                                    ? "text-white bg-indigo-500 hover:bg-purple-500 hover:ring-1"
                                    : ""
                            }
                        >
                            PELANGGAN
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={
                                url === "/penjualan"
                                    ? "text-white bg-indigo-500 hover:bg-purple-500 hover:ring-1"
                                    : ""
                            }
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
                        <div className="w-10 rounded-full">
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
                        {!user ? (
                            <>
                                <li>
                                    <Link href={route("login")} as="button">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route("register")} as="button">
                                        Register
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link
                                        href={route("dashboard")}
                                        as="button"
                                        className="justify-between"
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link>Settings</Link>
                                </li>
                                <li>
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Logout
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
