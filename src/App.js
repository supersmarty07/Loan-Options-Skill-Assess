import "./App.css";
import Header from "./components/Header";
import DataTable from "./components/DataTable";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [loadStatus, setloadStatus] = useState(false);
  const [deleteStatus, setdeleteStatus] = useState(false);
  const [addItem, setaddItem] = useState("");
  const [num, setNum] = useState(0);
  const [addNum, setAddNum] = useState(0);
  const [addStatus, setaddStatus] = useState(false);
  const [pd, setPd] = useState([]);

  const dataLoad = (val) => {
    setloadStatus(val);
  };
  const dataDelete = (val) => {
    setNum(num + 1);
    setdeleteStatus(val);
    return null;
  };
  const dataAdd = (val) => {
    setAddNum(addNum + 1);
    setaddStatus(val);
    return null;
  };
  const getData = async () => {
    const { data } = await axios.get(
      `http://universities.hipolabs.com/search?country=Australia`
    );
    setData(data);
    setaddItem(data[0]);
  };
  useEffect(() => {
    getData();
  }, []);
  let passData;

  if (loadStatus) passData = data;
  if (deleteStatus) {
    passData = data.slice(0, -1 - num);
  }
  if (addStatus) {
    passData = data;
    passData.push(addItem);
    setaddStatus(false);
  }
  if (!loadStatus) passData = {};
  return (
    <div className="container">
      <Header />
      <Buttons dataLoad={dataLoad} dataDelete={dataDelete} dataAdd={dataAdd} />
      <DataTable props={passData} />
    </div>
  );
}

export default App;
