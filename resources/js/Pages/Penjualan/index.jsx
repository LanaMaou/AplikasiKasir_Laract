import Modal from "@/Components/Modal";
import ShowData from "@/Components/ShowData";
import { router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaShoppingCart } from "react-icons/fa";
import { PiListPlusFill } from "react-icons/pi";
import handleDelete from "./utils/handleDelete";
import FormPenjualan from "./FormPenjualan";

export default function Penjualan(props) {
    const [showModal, setShowModal] = useState(false);
    const [IdPelanggan, setIdPelanggan] = useState("");
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
            pelanggan_id: IdPelanggan,
        };
        setShowModal(false);
        return router.post("/penjualan", data);
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
                    setShowModal(false);
                }}
                maxWidth="md"
            >
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Tambah Data</h2>
                        <FormPenjualan
                            Pelanggans={props.pelanggans}
                            setIdPelanggan={setIdPelanggan}
                            submitTambah={submitTambah}
                        />
                    </div>
                </div>
            </Modal>

            <div className="overflow-x-auto mt-5 w-3/4 mx-auto">
                <button
                    className="btn btn-md btn-primary text-lg my-5 ms-2 group shadow-md shadow-purple-500"
                    onClick={() => {
                        setShowModal(true);
                    }}
                >
                    <PiListPlusFill className="w-8 h-8 group-hover:animate-bounce" />{" "}
                    Tambah Penjualan
                </button>
                <div className="overflow-y-scroll max-h-[500px]">
                    <table className="table font-bold text-lg text-center table-pin-rows table-pin-cols">
                        <thead>
                            <tr className="bg-base-200 text-lg ">
                                <th>No</th>
                                <th>Tanggal Penjualan</th>
                                <th>Nama Pelanggan</th>
                                <th>Alamat</th>
                                <th>Total</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.penjualans.data &&
                            props.penjualans.data.length > 0 ? (
                                props.penjualans.data.map(
                                    (penjualan, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{penjualan.tgl_penjualan}</td>
                                            <td>
                                                {
                                                    penjualan.pelanggans
                                                        .nama_pelanggan
                                                }
                                            </td>
                                            <td>
                                                {penjualan.pelanggans.alamat}
                                            </td>
                                            <td>{penjualan.total_harga}</td>
                                            <td className="flex justify-center gap-2">
                                                <button
                                                    className="btn btn-outline btn-sm btn-warning group"
                                                    onClick={() =>
                                                        handleEdit(penjualan)
                                                    }
                                                >
                                                    <FaShoppingCart className="group-hover:animate-bounce" />{" "}
                                                    Cek Keranjang
                                                </button>
                                                <button
                                                    className="btn btn-outline btn-sm btn-error group"
                                                    as="button"
                                                    onClick={() =>
                                                        handleDelete(
                                                            penjualan.id
                                                        )
                                                    }
                                                >
                                                    <FaTrash className="group-hover:animate-bounce" />{" "}
                                                    Hapus
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                )
                            ) : (
                                <tr>
                                    <td>
                                        <p>Penjualan Tidak Ada!</p>
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
