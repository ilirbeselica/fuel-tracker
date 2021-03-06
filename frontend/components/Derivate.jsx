import React, { useState, useEffect } from "react";
import axios from "axios";
import RaporteDerivate from "./RaporteDerivate";

const Derivate = () => {
  let rendero;

  const [cila, setCila] = useState("");

  const [datas, setDatas] = useState({});

  const [raporteData, setRaporteData] = useState({});

  const [raporteResponse, setRaporteResponse] = useState([]);

  const [shfaqRaporte, setShfaqRaporte] = useState(false);

  const [status, setStatus] = useState({
    message: "Subbmission Was Succesful",
    alert: "alert-success",
    hidden: true,
  });

  const authHeader = { "x-auth-token": localStorage.getItem("auth-token") };

  const sendData = (data) => {
    axios
      .post("http://server-ip:PORT/api/derivate", data, {
        headers: authHeader,
      })
      .then((res) => {
        if (res.data.errors) {
          setStatus({
            message: "Something Missing",
            alert: "alert-danger",
            hidden: false,
          });
        } else if (res.data.createdAt) {
          setStatus({
            message: "Subbmission Was Succesful",
            alert: "alert-success",
            hidden: false,
          });
        }
      });
  };

  const getData = (data) => {
    axios
      .post("http://server-ip:PORT/api/derivate/info", data, {
        headers: authHeader,
      })
      .then((res) => {
        if (res.data.length > 0) {
          setRaporteResponse(res.data);
          setShfaqRaporte(!shfaqRaporte);
        } else {
          setShfaqRaporte(false);
          setStatus({
            message: "No data has been found",
            alert: "alert-dange",
            hidden: false,
          });
        }
      });
  };

  const regjistro = (
    <form class="w-50 mx-auto">
      <div
        className={`alert ${status.alert}`}
        role="alert"
        hidden={status.hidden}
      >
        {status.message}
      </div>

      <div className="form-group">
        <label htmlFor="data">Data</label>
        <input
          className="form-control"
          type="date"
          name="data"
          id="data"
          onChange={(e) => setDatas({ ...datas, data: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label htmlFor="pompa">Serial Nr:</label>
        <input
          className="form-control"
          type="text"
          name="serial"
          id="serial"
          onChange={(e) => setDatas({ ...datas, serial: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="pompa">Pompa</label>
        <input
          className="form-control"
          type="text"
          name="pompa"
          id="pompa"
          onChange={(e) => setDatas({ ...datas, pompa: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label htmlFor="tabela">Tabelat</label>
        <select
          className="form-control"
          name="tabela"
          id="tabela"
          onChange={(e) => setDatas({ ...datas, tabela: e.target.value })}
        >
          <option value="Tabelat">Tabelat</option>
          <option value="Vehicle ID">Vehicle ID</option>
          <option value="Vehicle ID">Vehicle ID</option>
          <option value="Vehicle ID">Vehicle ID</option>
          <option value="Vehicle ID">Vehicle ID</option>
          <option value="Vehicle ID">Vehicle ID</option>
          <option value="Vehicle ID">Vehicle ID</option>
          <option value="Vehicle ID">Vehicle ID</option>
          <option value="Vehicle ID">Vehicle ID</option>
          <option value="Vehicle ID">Vehicle ID</option>
          <option value="Vehicle ID">Vehicle ID</option>
          <option value="Vehicle ID">Vehicle ID</option>

        </select>
      </div>

      <div className="form-group">
        <label htmlFor="personi">Personi</label>
        <select
          className="form-control"
          name="personi"
          id="personi"
          onChange={(e) => setDatas({ ...datas, personi: e.target.value })}
        >
          <option value="personi">Personi</option>
          <option value="Employee Name">Employee Name</option>
          <option value="Employee Name">Employee Name</option>
          <option value="Employee Name">Employee Name</option>
          <option value="Employee Name">Employee Name</option>
          <option value="Employee Name">Employee Name</option>
          <option value="Employee Name">Employee Name</option>
          <option value="Employee Name">Employee Name</option>
          <option value="Employee Name">Employee Name</option>
          <option value="Employee Name">Employee Name</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="litra">Litra</label>
        <input
          className="form-control"
          type="number"
          name="litra"
          id="litra"
          step="0.1"
          onChange={(e) => setDatas({ ...datas, litra: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label htmlFor="kilometra">Kilometra</label>
        <input
          className="form-control"
          type="number"
          onChange={(e) => setDatas({ ...datas, kilometra: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label htmlFor="total">Totali</label>
        <input
          className="form-control"
          type="number"
          step="0.1"
          name="totali"
          onChange={(e) => setDatas({ ...datas, totali: e.target.value })}
        />
      </div>
      <div className="buttons">
        <button
          type="button"
          className="btn btn-primary butoni"
          onClick={() => {
            sendData(datas);
          }}
        >
          Submit
        </button>
        <button
          type="reset"
          className="btn btn-secondary butoni"
          onClick={() => {
            setStatus({ hidden: true });
          }}
        >
          Clear
        </button>
      </div>
    </form>
  );

  const raporte = (
    <form className="w-50 mx-auto">
      <div
        className={`alert ${status.alert}`}
        role="alert"
        hidden={status.hidden}
      >
        {status.message}
      </div>

      <div className="form-group">
        <label htmlFor="prej">Prej:</label>
        <input
          type="date"
          className="form-control"
          name="prej"
          id="prej"
          onChange={(e) =>
            setRaporteData({ ...raporteData, prej: e.target.value })
          }
        />
      </div>

      <div className="form-group">
        <label htmlFor="deri">Deri:</label>
        <input
          type="date"
          className="form-control"
          name="deri"
          id="deri"
          onChange={(e) =>
            setRaporteData({ ...raporteData, deri: e.target.value })
          }
        />
      </div>

      <div className="div form-group">
        <label htmlFor="tabelat">Tabelat</label>
        <select
          className="form-control"
          name="tabelat"
          id="tabelat"
          onChange={(e) =>
            setRaporteData({ ...raporteData, tabela: e.target.value })
          }
        >
          <option value="gjitha">Te Gjitha</option>
          <option value="Vehicle ID">Vehicle ID</option>
          <option value="Vehicle ID">Vehicle ID</option>
          <option value="Vehicle ID">Vehicle ID</option>
          <option value="Vehicle ID">Vehicle ID</option>
          <option value="Vehicle ID">Vehicle ID</option>
          <option value="Vehicle ID">Vehicle ID</option>
          <option value="Vehicle ID">Vehicle ID</option>
          <option value="Vehicle ID">Vehicle ID</option>
          <option value="Vehicle ID">Vehicle ID</option>
          <option value="Vehicle ID">Vehicle ID</option>
          <option value="Vehicle ID">Vehicle ID</option>
        </select>
      </div>

      <div className="buttons">
        <button
          type="button"
          className="btn btn-primary butoni"
          onClick={() => getData(raporteData)}
        >
          Submit
        </button>
        <button type="button" className="btn btn-secondary butoni">
          Clear
        </button>
      </div>
    </form>
  );

  const zgjedhe = (
    <div className="row zgjedh">
      <div
        className="col-12 text-center"
        onClick={() => {
          setCila("regjistro");
        }}
      >
        Regjistro te dhenat
      </div>
      <div
        className="col-12 text-center"
        onClick={() => {
          setCila("raporte");
        }}
      >
        Shfaq Raporte
      </div>
    </div>
  );

  if (cila === "") {
    rendero = zgjedhe;
  }

  if (cila === "raporte") {
    rendero = raporte;
  }

  if (cila === "regjistro") {
    rendero = regjistro;
  }

  return (
    <div className="container fluid">
      {shfaqRaporte ? <RaporteDerivate items={raporteResponse} /> : rendero}
    </div>
  );
};

export default Derivate;
