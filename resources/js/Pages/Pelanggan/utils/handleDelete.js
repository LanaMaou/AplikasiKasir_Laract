import { router } from "@inertiajs/react";
import Swal from "sweetalert2";

const handleDelete = (id) => {
    Swal.fire({
        title: "Apakah anda yakin ingin menghapus pelanggan ini?",
        text: "Tindakan ini tidak bisa diulang.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Hapus!",
        cancelButtonText: "Batal",
    }).then((result) => {
        if (result.isConfirmed) {
            router.delete(`/pelanggan/${id}`);
            Swal.fire({
                title: "Pelanggan Dihapus!",
                text: "Pelanggan berhasil dihapus.",
                icon: "success",
            });
        }
    });
};

export default handleDelete;
