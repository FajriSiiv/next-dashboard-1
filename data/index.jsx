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
];

export const dataUser = [
  {
    nama: "Muhammad Fajri",
    pembuatan: "2022",
    wilayah: "Jakarta",
    status: "Aktif",
  },
  {
    nama: "Andre Sua",
    pembuatan: "2021",
    wilayah: "Bekasi",
    status: "Aktif",
  },
  {
    nama: "Wijil Muhammad",
    pembuatan: "2022",
    wilayah: "Tangerang",
    status: "Tidak Aktif",
  },

  {
    nama: "Hello Fajri",
    pembuatan: "2024",
    wilayah: "Jawa Timur",
    status: "Aktif",
  },
];
