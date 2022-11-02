import { useRouter } from "next/router";
import React from "react";
import ButtonBack from "../../../../components/ButtonBack";
import Label from "../../../../components/Label";
import { dataUser as data } from "../../../../data";
import Content from "../../../../layout/Content";

const DetailUser = () => {
  const router = useRouter();
  const id = router.query.detailUser;

  const filterData = data.filter((e) => e.id === parseInt(id))[0];
  return (
    <Content name={`Detail ${filterData.nama}`}>
      <ButtonBack />
      <div className="flex flex-col gap-y-5 bg-gray-100 p-5">
        <Label text="Nama" data={filterData.nama} />
        <Label text="Pembuatan" data={filterData.pembuatan} />
        <Label text="Status" data={filterData.status} />
        <Label text="Wilayah" data={filterData.wilayah} />
      </div>
    </Content>
  );
};

export default DetailUser;
