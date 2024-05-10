import Modal from "@/Components/Modal";
import ShowData from "@/Components/ShowData";
import { router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { FaTrash, FaCartPlus } from "react-icons/fa";
import { PiListPlusFill } from "react-icons/pi";
import handleDelete from "./utils/handleDelete";
import FormKeranjang from "./FormKeranjang";

export default function Keranjang(props) {
    const [showModal, setShowModal] = useState(false);
    const [IdProduk, setIdProduk] = useState("");
    const [JumlahBeli, setJumlahBeli] = useState("");
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
            penjualan_id: props.penjualan.id,
            produk_id: IdProduk,
            jumlah_beli: JumlahBeli,
        };
        setShowModal(false);
        return router.post("/keranjang", data);
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
                        <FormKeranjang
                            Produks={props.produks}
                            setIdProduk={setIdProduk}
                            setJumlahBeli={setJumlahBeli}
                            submitTambah={submitTambah}
                        />
                    </div>
                </div>
            </Modal>

            <div className="overflow-x-auto mt-5 w-3/4 mx-auto">
                <div className="flex justify-between items-center">
                    <button
                        className="btn btn-md btn-primary text-lg my-5 ms-2 group shadow-md shadow-purple-500 order-2"
                        onClick={() => {
                            setShowModal(true);
                        }}
                    >
                        <FaCartPlus className="w-8 h-8 group-hover:animate-bounce" />{" "}
                        Tambah Ke Keranjang
                    </button>
                    <h3 className="font-semibold flex flex-col items-center text-sm text-slate-500 order-1">
                        NAMA PELANGGAN
                        <span className="font-bold text-purple-700 text-3xl">
                            {props.penjualan.pelanggans.nama_pelanggan}
                        </span>
                    </h3>
                    <h3 className="font-semibold flex flex-col items-center text-sm text-slate-500 order-3">
                        ALAMAT
                        <span className="font-bold text-purple-700 text-3xl">
                            {props.penjualan.pelanggans.alamat}
                        </span>
                    </h3>
                </div>
                <div className="overflow-y-scroll max-h-[500px]">
                    <table className="table font-bold text-lg text-center table-pin-rows table-pin-cols">
                        <thead>
                            <tr className="bg-base-200 text-lg ">
                                <th>No</th>
                                <th>Nama Produk</th>
                                <th>Harga Satuan</th>
                                <th>Jumlah Beli</th>
                                <th>Sub Total</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.detailpenjualans.data &&
                            props.detailpenjualans.data.length > 0 ? (
                                props.detailpenjualans.data.map(
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
