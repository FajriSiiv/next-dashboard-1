import React from "react";
import ButtonAdd from "../../components/ButtonAdd";
import Tabel from "../../components/Tabel";
import Content from "../../layout/Content";
import { dataUser as data, columnsUser as columns } from "../../data";

const Personal = () => {
  return (
    <Content name="Personal Tabel">
      <div className="flex justify-end">
        <ButtonAdd text="Tambah User" link={`/personal/adduser`} />
      </div>
      <Tabel data={data} columns={columns} />
    </Content>
  );
};

export default Personal;
