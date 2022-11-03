import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ButtonBack from "../../../../components/ButtonBack";
import Label from "../../../../components/Label";
// import { dataUser as data } from "../../../../data";
import Content from "../../../../layout/Content";

const DetailUser = ({ data }) => {
  return (
    <Content name={`Detail User`}>
      <ButtonBack />
      <div className="flex flex-col gap-y-5 bg-gray-100 p-5">
        <h1></h1>
        <Label text="Name" data={data.name} />
        <Label text="Email" data={data.email} />
        <Label text="Phone" data={data.phone} />
        <Label text="Website" data={data.website} />
      </div>
    </Content>
  );
};

export async function getServerSideProps(context) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  );
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}

export default DetailUser;
