import React from "react";
import DataTable from "react-data-table-component";

const Personal = () => {
  const customeStyles = {
    headRow: {
      style: {
        border: "1px solid rgba(0,0,0,0.12)",
      },
    },
    headCells: {
      style: {
        color: "red",
      },
    },
    rows: {
      style: {
        "&:not(:last-of-type)": {
          border: "none",
          borderRight: "1px solid rgba(0,0,0,0.12)",
          borderLeft: "1px solid rgba(0,0,0,0.12)",
        },
        "&:last-of-type": {
          border: "none",
          borderRight: "1px solid rgba(0,0,0,0.12)",
          borderLeft: "1px solid rgba(0,0,0,0.12)",
        },
      },
    },
  };

  const columns = [
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

  const data = [
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

  return (
    <div>
      <DataTable
        data={data}
        columns={columns}
        pagination
        customStyles={customeStyles}
        paginationRowsPerPageOptions={[5, 10, 15]}
        paginationDefaultPage={5}
      />
    </div>
  );
};

export default Personal;
