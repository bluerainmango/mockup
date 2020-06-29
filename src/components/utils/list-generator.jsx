import React from "react";

const listGenerator = (list) => (
  <li key={`${list.name}-${list.url}`}>
    <a href={list.url}>{!list.img && list.name}</a>
    {list.img && <img src={list.img} alt={list.name} />}
  </li>
);

export default listGenerator;
