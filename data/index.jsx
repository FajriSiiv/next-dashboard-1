import ButtonLinks from "../components/ButtonLinks";

export const columnsUser = [
  {
    name: "Nama",
    selector: (row) => row.nama,
    sortable: true,
  },
  {
    name: "Pembuatan",
    selector: (row) => row.pembuatan,
    sortable: true,
  },
  {
    name: "Wilayah",
    selector: (row) => row.wilayah,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true,
  },
  {
    name: "Action",
    cell: (row) => <ButtonLinks data={row.id} />,
    center: true,
  },
];

export const dataUser = [
  {
    nama: "Muhammad Fajri",
    pembuatan: "2022",
    wilayah: "Jakarta",
    status: "Aktif",
    id: 1,
  },
  {
    nama: "Andre Sua",
    pembuatan: "2021",
    wilayah: "Bekasi",
    status: "Aktif",
    id: 2,
  },
  {
    nama: "Wijil Muhammad",
    pembuatan: "2022",
    wilayah: "Tangerang",
    status: "Tidak Aktif",
    id: 3,
  },

  {
    nama: "Hello Fajri",
    pembuatan: "2024",
    wilayah: "Jawa Timur",
    status: "Aktif",
    id: 4,
  },
];
