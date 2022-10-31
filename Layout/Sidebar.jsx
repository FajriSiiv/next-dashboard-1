import Link from "next/link";
import React, { useState } from "react";

const Sidebar = () => {
  const tags = ["dashboard", "personal", "corporate", "order"];

  return (
    <div className="flex flex-col pt-20 sticky">
      {tags.map((e) => (
        <div key={e} className={` `}>
          <Link href={`/${e}`}>
            <li className="cursor-pointer capitalize px-5 py-3 hover:bg-slate-200 text-lg list-none w-full">
              {e}
            </li>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
