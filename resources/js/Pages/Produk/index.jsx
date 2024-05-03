import Modal from "@/Components/Modal";
import ShowData from "@/Components/ShowData";
import { Link, router } from "@inertiajs/react";
import { useState } from "react";

export default function Produk(props) {
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState("");
    const [NamaProduk, setNamaProduk] = useState("");
    const [HargaProduk, setHargaProduk] = useState("");
    const [Stok, setStok] = useState("");
    const [Produk, setProduk] = useState({});

    const submitTambah = (e) => {
        e.preventDefault();

        const data = {
            nama_produk: NamaProduk,
            harga_produk: HargaProduk,
            stok: Stok,
        };
        setShowModal(false);
        return router.post("/produk", data);
    };

    const submitUbah = (e) => {
        e.preventDefault();

        const data = {
            id: Produk.id,
            nama_produk: Produk.nama_produk,
            harga_produk: Produk.harga_produk,
            stok: Produk.stok,
        };
        setShowModal(false);
        return router.put("/produk", data);
    };

    const handleEdit = (produk) => {
        setProduk(produk);
        setTitleModal("Ubah");
        setShowModal(true);
        console.log(NamaProduk);
    };

    return (
        <ShowData title={props.title} user={props.auth.user}>
            <Modal
                show={showModal}
                closeable={true}
                onClose={() => {
                    setShowModal(false), setProduk({});
                }}
                maxWidth="md"
            >
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">
                            {titleModal === "Ubah"
                                ? "Ubah Data"
                                : "Tambah Data"}
                        </h2>
                        <form
                            onSubmit={(e) =>
                                Produk.id ? submitUbah(e) : submitTambah(e)
                            }
                            className="w-full"
                        >
                            <div className="flex flex-col items-center">
                                <input
                                    type="text"
                                    placeholder="Nama Produk"
                                    className="input input-bordered input-primary w-full max-w-full my-2"
                                    onChange={(NamaProduk) =>
                                        setNamaProduk(NamaProduk.target.value)
                                    }
                                    required
                                    value={
                                        Produk.nama_produk
                                            ? Produk.nama_produk
                                            : ""
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="Harga Produk"
                                    className="input input-bordered input-primary w-full max-w-full my-2"
                                    onChange={(HargaProduk) =>
                                        setHargaProduk(HargaProduk.target.value)
                                    }
                                    required
                                    value={
                                        Produk.harga_produk
                                            ? Math.floor(Produk.harga_produk)
                                            : ""
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="Stok"
                                    className="input input-bordered input-primary w-full max-w-full my-2"
                                    onChange={(Stok) =>
                                        setStok(Stok.target.value)
                                    }
                                    required
                                    value={Produk.stok ? Produk.stok : ""}
                                />
                            </div>
                            <div className="flex justify-start w-full gap-1">
                                <button
                                    type="submit"
                                    className={`btn ${
                                        titleModal === "Ubah"
                                            ? "btn-warning text-black"
                                            : "btn-success text-white"
                                    } text-base`}
                                >
                                    {titleModal === "Ubah" ? "Ubah" : "Tambah"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>

            <div className="overflow-x-auto mt-5 w-3/4 mx-auto">
                <button
                    className="btn btn-md btn-primary text-lg my-5 ms-2"
                    onClick={() => {
                        setShowModal(true), setTitleModal("Tambah");
                    }}
                >
                    Tambah Data
                </button>
                <table className="table font-bold text-lg text-center">
                    <thead>
                        <tr className="bg-base-200 text-lg ">
                            <th>No</th>
                            <th>Nama Produk</th>
                            <th>Harga</th>
                            <th>Stok</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.produks.data && props.produks.data.length > 0 ? (
                            props.produks.data.map((produk, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{produk.nama_produk}</td>
                                    <td>
                                        {Math.floor(
                                            produk.harga_produk
                                        ).toLocaleString("id-ID", {
                                            style: "currency",
                                            currency: "IDR",
                                        })}
                                    </td>
                                    <td>{produk.stok}</td>
                                    <td className="flex justify-center gap-2">
                                        <button
                                            className="btn btn-outline btn-sm btn-warning"
                                            onClick={() => handleEdit(produk)}
                                        >
                                            Edit
                                        </button>
                                        <Link
                                            className="btn btn-outline btn-sm btn-error"
                                            href={route(
                                                "produk.destroy",
                                                produk.id
                                            )}
                                        >
                                            Delete
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td>
                                    <p>Produk Masih Kosong!</p>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </ShowData>
    );
}
