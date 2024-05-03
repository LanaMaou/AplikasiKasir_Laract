import ShowData from "@/Components/ShowData";
import { Link } from "@inertiajs/react";

export default function Pelanggan(props) {
    return (
        <ShowData title={props.title} user={props.auth.user}>
            <div className="overflow-x-auto mt-5 w-3/4 mx-auto">
                <Link
                    className="btn btn-md btn-primary text-lg my-5"
                    href={route("produk.create")}
                >
                    Insert Data
                </Link>
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
                                        <Link
                                            className="btn btn-outline btn-sm btn-warning"
                                            href={route(
                                                "produk.edit",
                                                produk.id
                                            )}
                                        >
                                            Edit
                                        </Link>
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
                                    <p>Pelanggan Masih Kosong!</p>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </ShowData>
    );
}
