import { FaPlus } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

export default function FormProduk({
    Produk = {},
    titleModal = "",
    setNamaProduk = () => {},
    setHargaProduk = () => {},
    setStok = () => {},
    submitTambah = () => {},
    submitUbah = () => {},
}) {
    return (
        <form
            onSubmit={(e) => (Produk.id ? submitUbah(e) : submitTambah(e))}
            className="w-full"
        >
            <div className="flex flex-col items-center">
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Nama Produk</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Nama Produk"
                        className="input input-bordered input-primary w-full max-w-full"
                        onChange={(NamaProduk) =>
                            setNamaProduk(NamaProduk.target.value)
                        }
                        required
                        defaultValue={
                            Produk.nama_produk ? Produk.nama_produk : ""
                        }
                    />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Harga Produk</span>
                    </div>
                    <input
                        type="number"
                        placeholder="Harga Produk"
                        className="input input-bordered input-primary w-full max-w-full"
                        onChange={(HargaProduk) =>
                            setHargaProduk(HargaProduk.target.value)
                        }
                        required
                        defaultValue={
                            Produk.harga_produk
                                ? Math.floor(Produk.harga_produk)
                                : ""
                        }
                        min={1}
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
                        onChange={(Stok) => setStok(Stok.target.value)}
                        required
                        defaultValue={Produk.stok ? Produk.stok : ""}
                        min={1}
                        max={9999999999}
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
