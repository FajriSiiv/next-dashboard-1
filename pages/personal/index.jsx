import React, { useEffect, useState } from "react";
import ButtonAdd from "../../components/ButtonAdd";
import Tabel from "../../components/Tabel";
import Content from "../../layout/Content";
import { dataUser as datas, columnsUser as column } from "../../data";

const Personal = () => {
  const [data, setData] = useState([]);
  const [columns, setColums] = useState([]);

  useEffect(() => {
    setData(datas);
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
