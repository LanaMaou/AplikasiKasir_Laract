import Modal from "@/Components/Modal";
import ShowData from "@/Components/ShowData";
import { router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { TbCubePlus } from "react-icons/tb";
import { FaEdit, FaTrash } from "react-icons/fa";
import handleDelete from "./utils/handleDelete";
import FormProduk from "./FormProduk";

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
                        <FormProduk
                            Produk={Produk}
                            titleModal={titleModal}
                            setNamaProduk={setNamaProduk}
                            setHargaProduk={setHargaProduk}
                            setStok={setStok}
                            submitUbah={submitUbah}
                            submitTambah={submitTambah}
                        />
                    </div>
                </div>
            </Modal>

            <div className="overflow-x-auto mt-5 w-3/4 mx-auto">
                <button
                    className="btn btn-md btn-primary text-lg my-5 ms-2 group shadow-md shadow-purple-500"
                    onClick={() => {
                        setShowModal(true), setTitleModal("Tambah");
                    }}
                >
                    <TbCubePlus className="w-8 h-8 group-hover:animate-bounce duration-200" />{" "}
                    Tambah Produk
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
                                                className="btn btn-outline btn-sm btn-warning group"
                                                onClick={() =>
                                                    handleEdit(produk)
                                                }
                                            >
                                                <FaEdit className="group-hover:animate-bounce" />{" "}
                                                Ubah
                                            </button>
                                            <button
                                                className="btn btn-outline btn-sm btn-error group"
                                                as="button"
                                                onClick={() =>
                                                    handleDelete(produk.id)
                                                }
                                            >
                                                <FaTrash className="group-hover:animate-bounce" />
                                                Hapus
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
