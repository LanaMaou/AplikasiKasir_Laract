import Modal from "@/Components/Modal";
import ShowData from "@/Components/ShowData";
import { router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import handleDelete from "./utils/handleDelete";

export default function Produk(props) {
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState("");
    const [NamaProduk, setNamaProduk] = useState("");
    const [HargaProduk, setHargaProduk] = useState("");
    const [Stok, setStok] = useState("");
    const [Produk, setProduk] = useState({});
    const [flashMessage, setFlashMessage] = useState("");

    useEffect(() => {
        if (props.flash.message) {
            setFlashMessage(props.flash.message);
            setTimeout(() => {
                setFlashMessage("");
                props.flash.message = "";
            }, 3000);
        }
    }, [props.flash.message]);

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
            nama_produk: NamaProduk !== "" ? NamaProduk : Produk.nama_produk,
            harga_produk:
                HargaProduk !== "" ? HargaProduk : Produk.harga_produk,
            stok: Stok !== "" ? Stok : Produk.stok,
        };
        setProduk({});
        setShowModal(false);
        return router.put(`/produk/${Produk.id}`, data);
    };

    const handleEdit = (produk) => {
        setProduk(produk);
        setTitleModal("Ubah");
        setShowModal(true);
    };

    return (
        <ShowData
            title={props.title}
            user={props.auth.user}
            message={flashMessage}
        >
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
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">
                                            Nama Produk
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Nama Produk"
                                        className="input input-bordered input-primary w-full max-w-full"
                                        onChange={(NamaProduk) =>
                                            setNamaProduk(
                                                NamaProduk.target.value
                                            )
                                        }
                                        required
                                        defaultValue={
                                            Produk.nama_produk
                                                ? Produk.nama_produk
                                                : ""
                                        }
                                    />
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">
                                            Harga Produk
                                        </span>
                                    </div>
                                    <input
                                        type="number"
                                        placeholder="Harga Produk"
                                        className="input input-bordered input-primary w-full max-w-full"
                                        onChange={(HargaProduk) =>
                                            setHargaProduk(
                                                HargaProduk.target.value
                                            )
                                        }
                                        required
                                        defaultValue={
                                            Produk.harga_produk
                                                ? Math.floor(
                                                      Produk.harga_produk
                                                  )
                                                : ""
                                        }
                                        min={0}
                                        max={9999999999}
                                    />
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Stok</span>
                                    </div>
                                    <input
                                        type="number"
                                        placeholder="Stok"
                                        className="input input-bordered input-primary w-full max-w-full"
                                        onChange={(Stok) =>
                                            setStok(Stok.target.value)
                                        }
                                        required
                                        defaultValue={
                                            Produk.stok ? Produk.stok : ""
                                        }
                                    />
                                </label>
                            </div>
                            <div className="flex justify-start w-full gap-1 mt-2">
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
                <div className="overflow-y-scroll max-h-[500px]">
                    <table className="table font-bold text-lg text-center table-pin-rows table-pin-cols">
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
                            {props.produks.data &&
                            props.produks.data.length > 0 ? (
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
                                                onClick={() =>
                                                    handleEdit(produk)
                                                }
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="btn btn-outline btn-sm btn-error"
                                                as="button"
                                                onClick={() =>
                                                    handleDelete(produk.id)
                                                }
                                            >
                                                Delete
                                            </button>
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
            </div>
        </ShowData>
    );
}
