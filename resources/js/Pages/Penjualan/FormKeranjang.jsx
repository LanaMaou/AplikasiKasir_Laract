import { FaPlus } from "react-icons/fa";

export default function FormKeranjang({
    Produks = [],
    setIdProduk = () => {},
    setJumlahBeli = () => {},
    submitTambah = () => {},
}) {
    return (
        <form onSubmit={(e) => submitTambah(e)} className="w-full">
            <div className="flex flex-col items-center">
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Nama Produk</span>
                    </div>
                    <select
                        className="select select-primary w-full"
                        onChange={(e) => setIdProduk(e.target.value)}
                        defaultValue={"default"}
                    >
                        <option disabled value={"default"}>
                            Pilih Produk
                        </option>
                        {Produks.map((produk) => (
                            <option key={produk.id} value={produk.id}>
                                {produk.nama_produk} - Harga :{" "}
                                {produk.harga_produk} - Stok : {produk.stok}
                            </option>
                        ))}
                    </select>
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Jumlah Beli</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Nama Produk"
                        className="input input-bordered input-primary w-full max-w-full"
                        onChange={(JumlahBeli) =>
                            setJumlahBeli(JumlahBeli.target.value)
                        }
                        required
                    />
                </label>
            </div>
            <div className="flex justify-start w-full gap-1 mt-2">
                <button
                    type="submit"
                    className={`btn btn-success text-white text-base`}
                >
                    <FaPlus />
                    Tambah
                </button>
            </div>
        </form>
    );
}
