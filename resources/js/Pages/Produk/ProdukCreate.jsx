import Navbar from "@/Components/Navbar";
import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";

export default function ProdukCreate(props) {
    const [NamaProduk, setNamaProduk] = useState("");
    const [HargaProduk, setHargaProduk] = useState("");
    const [Stok, setStok] = useState("");

    const submit = (e) => {
        e.preventDefault();

        const data = {
            nama_produk: NamaProduk,
            harga_produk: HargaProduk,
            stok: Stok,
        };
        return router.post("/produk", data);
    };

    return (
        <div>
            <Head title={props.title} />
            <Navbar />
            <h1 className="text-center font-semibold text-4xl">
                Tambah Data Produk
            </h1>
            <div className="mx-auto flex flex-col items-center w-full mt-5">
                <form onSubmit={(e) => submit(e)} className="w-1/3">
                    <div className="flex flex-col items-center">
                        <input
                            type="text"
                            placeholder="Nama Produk"
                            className="input input-bordered input-primary w-full max-w-full my-2"
                            onChange={(NamaProduk) =>
                                setNamaProduk(NamaProduk.target.value)
                            }
                            required
                        />
                        <input
                            type="text"
                            placeholder="Harga Produk"
                            className="input input-bordered input-primary w-full max-w-full my-2"
                            onChange={(HargaProduk) =>
                                setHargaProduk(HargaProduk.target.value)
                            }
                            required
                        />
                        <input
                            type="text"
                            placeholder="Stok"
                            className="input input-bordered input-primary w-full max-w-full my-2"
                            onChange={(Stok) => setStok(Stok.target.value)}
                            required
                        />
                    </div>
                    <div className="flex justify-start w-full gap-1">
                        <button
                            type="submit"
                            className="btn btn-success text-base"
                        >
                            Submit
                        </button>
                        <Link
                            href={route("produk.index")}
                            className="btn btn-warning"
                        >
                            Back
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
