import React, { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { Navigate } from "react-router";
import DataTerrorTable from "../components/DataTerrorTable";
import { getAllData } from "../api/complaintsApi";
import { Link } from "react-router";

export default function DataTerrorPage() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  async function loadData() {
    const dataFromServer = await getAllData();
    console.log(dataFromServer);
    setData(dataFromServer);
    setFilterData(dataFromServer)
  }

  useEffect(() => {
    loadData();
  }, []);

  const [search, setSearch] = useState("");
  const [yearBig, setYearBig] = useState("");
  const [yearSmall, setYearSmall] = useState("");

   useEffect(() => {
    setFilterData(data.filter(item => {
        // return item.city.inc

    }));
  }, [search, yearBig, yearSmall]);

  return (
    <>
      <Layout title="Terror Data System">
        <header className="filters">
          <h5>search:</h5>
          <input
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />

          <h5>{"Year>"}</h5>
          <input
            type="number"
            onChange={(e) => {
              setYearBig(e.target.value);
            }}
          />

          <h5>{"Year<"}</h5>
          <input
            type="number"
            onChange={(e) => {
              setYearSmall(e.target.value);
            }}
          />

          <button>Filter</button>
        </header>
        <DataTerrorTable data={filterData} />
        <Link to={"/test"} className="linkToTest">
          Beyond questions
        </Link>
      </Layout>
    </>
  );
}
