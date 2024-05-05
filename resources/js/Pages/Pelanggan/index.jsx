import Modal from "@/Components/Modal";
import ShowData from "@/Components/ShowData";
import { router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { PiUserCirclePlusBold } from "react-icons/pi";
import handleDelete from "./utils/handleDelete";
import FormPelanggan from "./FormPelanggan";

export default function Pelanggan(props) {
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState("");
    const [NamaPelanggan, setNamaPelanggan] = useState("");
    const [Alamat, setAlamat] = useState("");
    const [NoHp, setNoHp] = useState("");
    const [Pelanggan, setPelanggan] = useState({});
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
            nama_pelanggan: NamaPelanggan,
            alamat: Alamat,
            no_hp: NoHp,
        };
        setShowModal(false);
        return router.post("/pelanggan", data);
    };

    const submitUbah = (e) => {
        e.preventDefault();

        const data = {
            nama_pelanggan:
                NamaPelanggan !== "" ? NamaPelanggan : Pelanggan.nama_pelanggan,
            alamat: Alamat !== "" ? Alamat : Pelanggan.alamat,
            no_hp: NoHp !== "" ? NoHp : Pelanggan.no_hp,
        };
        setPelanggan({});
        setShowModal(false);
        return router.put(`/pelanggan/${Pelanggan.id}`, data);
    };

    const handleEdit = (pelanggan) => {
        setPelanggan(pelanggan);
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
                    setShowModal(false), setPelanggan({});
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
                        <FormPelanggan
                            Pelanggan={Pelanggan}
                            titleModal={titleModal}
                            setNamaPelanggan={setNamaPelanggan}
                            setAlamat={setAlamat}
                            setNoHp={setNoHp}
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
                    <PiUserCirclePlusBold className="w-8 h-8 group-hover:animate-bounce" />{" "}
                    Tambah Pelanggan
                </button>
                <div className="overflow-y-scroll max-h-[500px]">
                    <table className="table font-bold text-lg text-center table-pin-rows table-pin-cols">
                        <thead>
                            <tr className="bg-base-200 text-lg ">
                                <th>No</th>
                                <th>Nama Pelanggan</th>
                                <th>Alamat</th>
                                <th>No Hp</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.pelanggans.data &&
                            props.pelanggans.data.length > 0 ? (
                                props.pelanggans.data.map(
                                    (pelanggan, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{pelanggan.nama_pelanggan}</td>
                                            <td>{pelanggan.alamat}</td>
                                            <td>{pelanggan.no_hp}</td>
                                            <td className="flex justify-center gap-2">
                                                <button
                                                    className="btn btn-outline btn-sm btn-warning group"
                                                    onClick={() =>
                                                        handleEdit(pelanggan)
                                                    }
                                                >
                                                    <FaEdit className="group-hover:animate-bounce" />{" "}
                                                    Ubah
                                                </button>
                                                <button
                                                    className="btn btn-outline btn-sm btn-error group"
                                                    as="button"
                                                    onClick={() =>
                                                        handleDelete(
                                                            pelanggan.id
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
                                        <p>Pelanggan Tidak Ada!</p>
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
