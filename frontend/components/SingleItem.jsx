import React, { useState } from "react";
import axios from "axios";

const SingleItem = (props) => {
  const [visibility, setVisibility] = useState(false);
  const {
    _id,
    data,
    tabela,
    pompa,
    personi,
    litra,
    kilometra,
    totali,
  } = props.item;
  const dates = new Date(data);

  return (
    <tr className="table-primary" hidden={visibility}>
      <th scope="row" class="table-primary">
        {props.nr}
      </th>
      <td className="table-primary">{`${dates.getDate()}/${
        dates.getMonth() + 1
      }/${dates.getFullYear()}`}</td>
      <td>{tabela}</td>
      <td>{pompa}</td>
      <td>{personi}</td>
      <td>{litra}</td>
      <td>{kilometra}</td>
      <td>{totali}</td>
      <td style={{ textAlign: "center" }}>
        <input type="checkbox" />
      </td>
      <td>
        <a
          href="#"
          style={{ color: "black" }}
          onClick={() => {
            axios
              .post(
                "http://161.97.81.17:8898/api/derivate/delete",
                {
                  id: _id,
                },
                {
                  headers: {
                    "x-auth-token": localStorage.getItem("auth-token"),
                  },
                }
              )
              .then((res) => {
                if (res.data.deletedCount > 0) {
                  setVisibility(true);
                }
              });
          }}
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default SingleItem;
