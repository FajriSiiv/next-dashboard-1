import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ButtonBack from "../../../components/ButtonBack";
import { dataUser as data } from "../../../data";
const Adduser = () => {
  const router = useRouter();

  const [nama, setNama] = useState("");
  const [pembuatan, setPembuatan] = useState();
  const [wilayah, setWilayah] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let dataNew = {
      nama: nama,
      pembuatan: pembuatan,
      wilayah: wilayah,
      status: status,
    };
    data.push(dataNew);
    console.log(data);
    console.log(dataNew);
    router.push("/personal");
  };
  return (
    <div>
      <ButtonBack />
      <h1>Add User</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <input
          type="number"
          value={pembuatan}
          onChange={(e) => setPembuatan(e.target.value)}
        />
        <input
          type="text"
          value={wilayah}
          onChange={(e) => setWilayah(e.target.value)}
        />
        <select name="" onChange={(e) => setStatus(e.target.value)}>
          <option value="Aktif">Aktif</option>
          <option value="Tidak Aktif">Tidak Aktif</option>
        </select>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Adduser;
