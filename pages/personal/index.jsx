import React, { useEffect, useState } from "react";
import ButtonAdd from "../../components/ButtonAdd";
import Tabel from "../../components/Tabel";
import Content from "../../layout/Content";
import { columnsUser as column } from "../../data";

const Personal = () => {
  const [data, setData] = useState([]);
  const [columns, setColums] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((res) => res.json());

      setData(data);
    };
    getData();
    setColums(column);
  }, [data, columns]);

  return (
    <Content name="Personal Tabel">
      <div className="flex justify-end">
        <ButtonAdd text="Tambah User" link={`/personal/adduser`} />
      </div>
      {data && <Tabel data={data} columns={columns} />}
    </Content>
  );
};

export default Personal;
