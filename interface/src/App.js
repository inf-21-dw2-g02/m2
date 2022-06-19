import React from "react";
import { useState } from "react";
import "./App.css";
import axios from "axios";
import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Car from "./Resources/Car";
import EditCar from "./Ops/EditCar";
import CreateCar from "./Ops/CreateCar";

import Engine from "./Resources/Engine";
import EditEngine from "./Ops/EditEngine";
import CreateEngine from "./Ops/CreateEngine";

import Manufacturer from "./Resources/Manufacturer";
import EditManufacturer from "./Ops/EditManufacturer";
import CreateManufacturer from "./Ops/CreateManufacturer";

import Owner from "./Resources/Owner";
import EditOwner from "./Ops/EditOwner";
import CreateOwner from "./Ops/CreateOwner";

const request = axios.create({
  withCredentials: true,
});

const api = request.create({
  baseURL: "http://localhost:3000/",
});

const App = () => {
  // ----------------------------------------------------- HandleEditCar -----------------------------------------------------
  //Definição de estados para props para a Ediçao do carro
  const navigate = useNavigate();
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editColor, setEditColor] = useState("");
  const [editEngineId, setEditEngineId] = useState("");
  const [editManufacturerId, setEditManufacturerId] = useState("");
  const [editOwnerId, setEditOwnerId] = useState("");

  const [cars, setPosts] = React.useState([]);

  //fetchCars para popular array de carros
  React.useEffect(() => {
    const fetchCars = async () => {
      const response = await api.get("/Cars");
      setPosts(response.data);
    };
    fetchCars();
  }, []);

  //função handleEditCar
  const handleEditCar = async (id) => {
    const updatedCar = {
      id,
      name: editName,
      description: editDescription,
      color: editColor,
      engineId: editEngineId,
      manufacturerId: editManufacturerId,
      ownerId: editOwnerId,
    };
    try {
      const response = await api.put(`Car/${id}`, updatedCar);
      setPosts(cars.map((car) => (car.id === id ? { ...response.data } : car)));
      setEditName("");
      setEditDescription("");
      setEditColor("");
      setEditEngineId("");
      setEditManufacturerId("");
      setEditOwnerId("");
      navigate("/Cars");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  // ----------------------------------------------------- Fim HandleEditCar -----------------------------------------------------
  // -----------------------------------------------------  HandleCreateCar -----------------------------------------------------
  const [createName, setCreateName] = useState("");
  const [createDescription, setCreateDescription] = useState("");
  const [createColor, setCreateColor] = useState("");
  const [createEngineId, setCreateEngineId] = useState("");
  const [createManufacturerId, setCreateManufacturerId] = useState("");
  const [createOwnerId, setCreateOwnerId] = useState("");

  const handleCreateCar = async (e) => {
    e.preventDefault();
    const createCar = {
      name: createName,
      description: createDescription,
      color: createColor,
      engineId: createEngineId,
      manufacturerId: createManufacturerId,
      ownerId: createOwnerId,
    };
    try {
      const response = await api.post("/Cars", createCar);
      const allCars = [...cars, response.data];
      setPosts(allCars);
      setCreateName("");
      setCreateDescription("");
      setCreateColor("");
      setCreateEngineId("");
      setCreateManufacturerId("");
      setCreateOwnerId("");
      navigate("/Cars");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  // ----------------------------------------------------- Fim HandleCreateCar -----------------------------------------------------
  // ----------------------------------------------------- HandleEditEngine -----------------------------------------------------
  const [editNameEngine, setEditNameEngine] = useState("");
  const [editHP, setEditHP] = useState("");
  const [editBrand, setEditBrand] = useState("");

  const [engines, setEngines] = React.useState([]);

  //fetchCars para popular array de carros
  React.useEffect(() => {
    const fetchEngines = async () => {
      const response = await api.get("/Engines");
      setEngines(response.data);
    };
    fetchEngines();
  }, []);

  //função handleEditCar
  const handleEditEngine = async (id) => {
    const updatedEngine = {
      id,
      name: editNameEngine,
      horsepower: editHP,
      brand: editBrand,
    };
    try {
      const response = await api.put(`Engine/${id}`, updatedEngine);
      setPosts(
        engines.map((engine) =>
          engine.id === id ? { ...response.data } : engine
        )
      );
      setEditNameEngine("");
      setEditHP("");
      setEditBrand("");
      navigate("/Engines");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  // ----------------------------------------------------- Fim HandleEditEngine -----------------------------------------------------
  // -----------------------------------------------------  HandleCreateCar -----------------------------------------------------
  const [createNameEngine, setCreateNameEngine] = useState("");
  const [createHP, setCreateHP] = useState("");
  const [createBrand, setCreateBrand] = useState("");

  const handleCreateEngine = async (e) => {
    e.preventDefault();
    const createCar = {
      name: createNameEngine,
      horsepower: createHP,
      brand: createBrand,
    };
    try {
      const response = await api.post("/Engines", createCar);
      const allEngines = [...engines, response.data];
      setPosts(allEngines);
      setCreateNameEngine("");
      setCreateHP("");
      setCreateBrand("");
      navigate("/Engines");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  // ----------------------------------------------------- Fim HandleCreateCar -----------------------------------------------------
  // ----------------------------------------------------- HandleEditOwner -----------------------------------------------------
  const [editNameOwn, setEditNameOwn] = useState("");
  const [editAge, setEditAge] = useState("");
  const [editSex, setEditSex] = useState("");

  const [owners, setOwners] = React.useState([]);

  React.useEffect(() => {
    const fetchOwners = async () => {
      const response = await api.get("/Owners");
      setOwners(response.data);
    };
    fetchOwners();
  }, []);

  const handleEditOwner = async (id) => {
    const updatedOwner = {
      id,
      name: editNameOwn,
      age: editAge,
      sex: editSex,
    };
    try {
      const response = await api.put(`Owner/${id}`, updatedOwner);
      setOwners(
        owners.map((owner) => (owner.id === id ? { ...response.data } : owner))
      );
      setEditNameOwn("");
      setEditAge("");
      setEditSex("");
      navigate("/Owners");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  // ----------------------------------------------------- Fim HandleEditOwner -----------------------------------------------------
  // ----------------------------------------------------- HandleCreateOwner -----------------------------------------------------
  const [createNameOwn, setCreateNameOwn] = useState("");
  const [createAge, setCreateAge] = useState("");
  const [createSex, setCreateSex] = useState("");

  const handleCreateOwner = async (e) => {
    e.preventDefault();
    const createOwner = {
      name: createNameOwn,
      age: createAge,
      sex: createSex,
    };
    try {
      const response = await api.post("/Owners", createOwner);
      const allOwners = [...owners, response.data];
      setOwners(allOwners);
      setCreateNameOwn("");
      setCreateAge("");
      setCreateSex("");
      navigate("/Owners");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  // ----------------------------------------------------- Fim HandleCreateOwner -----------------------------------------------------
  // ----------------------------------------------------- HandleEditManufacturer -----------------------------------------------------
  const [editNameMan, setEditNameMan] = useState("");
  const [editFounded, setEditFounded] = useState("");
  const [editDescriptionMan, setEditDescriptionMan] = useState("");

  const [manufacturers, setManufacturers] = React.useState([]);

  React.useEffect(() => {
    const fetchManufacturers = async () => {
      const response = await api.get("/Manufacturers");
      setManufacturers(response.data);
    };
    fetchManufacturers();
  }, []);

  const handleEditManufacturer = async (id) => {
    const updatedManufacturer = {
      id,
      name: editNameMan,
      founded: editFounded,
      description: editDescriptionMan,
    };
    try {
      const response = await api.put(`Manufacturer/${id}`, updatedManufacturer);
      setManufacturers(
        manufacturers.map((manufacturer) =>
          manufacturer.id === id ? { ...response.data } : manufacturer
        )
      );
      setEditNameMan("");
      setEditFounded("");
      setEditDescriptionMan("");
      navigate("/Manufacturers");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  // ----------------------------------------------------- Fim HandleEditManufacturer -----------------------------------------------------
  // ----------------------------------------------------- HandleCreateManufacturer -----------------------------------------------------
  const [createNameMan, setCreateNameMan] = useState("");
  const [createFounded, setCreateFounded] = useState("");
  const [createDescriptionMan, setCreateDescriptionMan] = useState("");

  const handleCreateManufacturer = async (e) => {
    e.preventDefault();
    const createManufacturer = {
      name: createNameMan,
      founded: createFounded,
      description: createDescriptionMan,
    };
    try {
      const response = await api.post("/Manufacturers", createManufacturer);
      const allManufacturers = [...manufacturers, response.data];
      setManufacturers(allManufacturers);
      setCreateNameMan("");
      setCreateFounded("");
      setCreateDescriptionMan("");
      navigate("/Manufacturers");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  // ----------------------------------------------------- Fim HandleCreateManufacturer -----------------------------------------------------

  return (
    <div className="app">
      <h1>Car Dealership</h1>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/engines" element={<Engine />}></Route>
        <Route exact path="/cars" element={<Car />}></Route>
        <Route exact path="/manufacturers" element={<Manufacturer />}></Route>
        <Route exact path="/owners" element={<Owner />}></Route>
        <Route
          path="/car/:id"
          element={
            <EditCar
              cars={cars}
              handleEditCar={handleEditCar}
              editName={editName}
              setEditName={setEditName}
              editDescription={editDescription}
              setEditDescription={setEditDescription}
              editColor={editColor}
              setEditColor={setEditColor}
              editManufacturerId={editManufacturerId}
              setEditManufacturerId={setEditManufacturerId}
              editOwnerId={editOwnerId}
              setEditOwnerId={setEditOwnerId}
              editEngineId={editEngineId}
              setEditEngineId={setEditEngineId}
            />
          }
        ></Route>
        <Route
          exact
          path="/car/create"
          element={
            <CreateCar
              cars={cars}
              handleCreateCar={handleCreateCar}
              createName={createName}
              setCreateName={setCreateName}
              createDescription={createDescription}
              setCreateDescription={setCreateDescription}
              createColor={createColor}
              setCreateColor={setCreateColor}
              createManufacturerId={createManufacturerId}
              setCreateManufacturerId={setCreateManufacturerId}
              createOwnerId={createOwnerId}
              setCreateOwnerId={setCreateOwnerId}
              createEngineId={createEngineId}
              setCreateEngineId={setCreateEngineId}
            />
          }
        ></Route>
        <Route
          path="/engine/:id"
          element={
            <EditEngine
              engines={engines}
              handleEditEngine={handleEditEngine}
              editNameEngine={editNameEngine}
              setEditNameEngine={setEditNameEngine}
              editHP={editHP}
              setEditHP={setEditHP}
              editBrand={editBrand}
              setEditBrand={setEditBrand}
            />
          }
        ></Route>
        <Route
          exact
          path="/engine/create"
          element={
            <CreateEngine
              engines={engines}
              handleCreateEngine={handleCreateEngine}
              createNameEngine={createNameEngine}
              setCreateNameEngine={setCreateNameEngine}
              createHP={createHP}
              setCreateHP={setCreateHP}
              createBrand={createBrand}
              setCreateBrand={setCreateBrand}
            />
          }
        ></Route>
        <Route
          path="/owner/:id"
          element={
            <EditOwner
              owners={owners}
              handleEditOwner={handleEditOwner}
              editNameOwn={editNameOwn}
              setEditNameOwn={setEditNameOwn}
              editAge={editAge}
              setEditAge={setEditAge}
              editSex={editSex}
              setEditSex={setEditSex}
            />
          }
        ></Route>
        <Route
          exact
          path="/owner/create"
          element={
            <CreateOwner
              owners={owners}
              handleCreateOwner={handleCreateOwner}
              createNameOwn={createNameOwn}
              setCreateNameOwn={setCreateNameOwn}
              createAge={createAge}
              setCreateAge={setCreateAge}
              createSex={createSex}
              setCreateSex={setCreateSex}
            />
          }
        ></Route>
        <Route
          path="/manufacturer/:id"
          element={
            <EditManufacturer
              manufacturers={manufacturers}
              handleEditManufacturer={handleEditManufacturer}
              editNameMan={editNameMan}
              setEditNameMan={setEditNameMan}
              editFounded={editFounded}
              setEditFounded={setEditFounded}
              editDescriptionMan={editDescriptionMan}
              setEditDescriptionMan={setEditDescriptionMan}
            />
          }
        ></Route>
        <Route
          exact
          path="/manufacturer/create"
          element={
            <CreateManufacturer
              manufacturers={manufacturers}
              handleCreateManufacturer={handleCreateManufacturer}
              createNameMan={createNameMan}
              setCreateNameMan={setCreateNameMan}
              createFounded={createFounded}
              setCreateFounded={setCreateFounded}
              createDescriptionMan={createDescriptionMan}
              setCreateDescriptionMan={setCreateDescriptionMan}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/engines">Engines</NavLink>
      </li>
      <li>
        <NavLink to="/cars">Cars</NavLink>
      </li>
      <li>
        <NavLink to="/manufacturers">Manufacturers</NavLink>
      </li>
      <li>
        <NavLink to="/owners">Owners</NavLink>
      </li>
      <li>
        <a href="http://localhost:3000/auth/github"><i class="bi bi-github"></i> Login with GitHub</a>
      </li>
    </ul>
  </nav>
);

// ------------------------------- VISTAS -------------------------------

const Home = () => (
  <div className="home">
    <h1>Car Dealership Interface</h1>
  </div>
);

// ----------------------------- FIM VISTAS -----------------------------

export default App;
