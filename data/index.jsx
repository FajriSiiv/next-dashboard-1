import ButtonLinks from "../components/ButtonLinks";

export const columnsUser = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "No.Phone",
    selector: (row) => row.phone,
    sortable: true,
  },
  {
    name: "Website",
    selector: (row) => row.website,
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
