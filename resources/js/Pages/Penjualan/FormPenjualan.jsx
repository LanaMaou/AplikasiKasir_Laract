import { FaPlus } from "react-icons/fa";

export default function FormPenjualan({
    Pelanggans = [],
    setIdPelanggan = () => {},
    submitTambah = () => {},
}) {
    return (
        <form onSubmit={(e) => submitTambah(e)} className="w-full">
            <div className="flex flex-col items-center">
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Nama Pelanggan</span>
                    </div>
                    <select
                        className="select select-primary w-full"
                        onChange={(e) => setIdPelanggan(e.target.value)}
                        defaultValue={"default"}
                    >
                        <option disabled value={"default"}>
                            Pilih Nama Pelanggan
                        </option>
                        {Pelanggans.map((Pelanggan) => (
                            <option key={Pelanggan.id} value={Pelanggan.id}>
                                {Pelanggan.nama_pelanggan}
                            </option>
                        ))}
                    </select>
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
