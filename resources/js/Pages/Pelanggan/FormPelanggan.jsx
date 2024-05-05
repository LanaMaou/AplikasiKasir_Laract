import { FaPlus } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

export default function FormPelanggan({
    Pelanggan = {},
    titleModal = "",
    setNamaPelanggan = () => {},
    setAlamat = () => {},
    setNoHp = () => {},
    submitTambah = () => {},
    submitUbah = () => {},
}) {
    return (
        <form
            onSubmit={(e) => (Pelanggan.id ? submitUbah(e) : submitTambah(e))}
            className="w-full"
        >
            <div className="flex flex-col items-center">
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Nama Pelanggan</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Nama Pelanggan"
                        className="input input-bordered input-primary w-full max-w-full"
                        onChange={(NamaPelanggan) =>
                            setNamaPelanggan(NamaPelanggan.target.value)
                        }
                        required
                        defaultValue={
                            Pelanggan.nama_pelanggan
                                ? Pelanggan.nama_pelanggan
                                : ""
                        }
                    />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Alamat</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Alamat"
                        className="input input-bordered input-primary w-full max-w-full"
                        onChange={(Alamat) => setAlamat(Alamat.target.value)}
                        required
                        defaultValue={Pelanggan.alamat ? Pelanggan.alamat : ""}
                    />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">No Telepon</span>
                    </div>
                    <input
                        type="text"
                        placeholder="No Telepon"
                        className="input input-bordered input-primary w-full max-w-full"
                        onChange={(NoHp) => setNoHp(NoHp.target.value)}
                        required
                        defaultValue={Pelanggan.no_hp ? Pelanggan.no_hp : ""}
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
                    {titleModal === "Ubah" ? (
                        <>
                            <MdEdit /> {}
                            Ubah
                        </>
                    ) : (
                        <>
                            <FaPlus /> {}
                            Tambah
                        </>
                    )}
                </button>
            </div>
        </form>
    );
}
