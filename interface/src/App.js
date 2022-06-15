import React from "react";
import { useState } from "react";
import "./App.css";
import axios from "axios";
import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import EditCar from "./EditCar";
import Car from "./Resources/Car";
import Engine from "./Resources/Engine";
import Manufacturer from "./Resources/Manufacturer";
import Owner from "./Resources/Owner";

const endpoint_car = "http://localhost:3000/";

const request = axios.create({
  withCredentials: true,
});

const api = request.create({
  baseURL: "http://localhost:3000/"
  }
);

const App = () => {
  const navigate = useNavigate ();
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editColor, setEditColor] = useState("");
  const [editEngineId, setEditEngineId] = useState("");
  const [editManufacturerId, setEditManufacturerId] = useState("");
  const [editOwnerId, setEditOwnerId] = useState("");

  
  const [cars, setPosts] = React.useState([]);

  React.useEffect(() => {
    const fetchCars = async () => {
      const response = await api.get('/Cars');
      setPosts(response.data);
    }
    fetchCars();
  }, []);
  
  const handleEdit = async (id) => {
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
      setPosts(
        cars.map((car) => (car.id === id ? { ...response.data } : car))
      );
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
        <Route path="/car/:id" element={ <EditCar
            cars={cars}
            handleEdit={handleEdit}
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
          />}>
          
        </Route>
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
    </ul>
  </nav>
);

// ------------------------------- VISTAS -------------------------------
const Home = () => (
  <div className="home">
    <h1>Welcome to my portfolio website</h1>
    <p> Feel free to browse around and learn more about me.</p>
  </div>
);

// ----------------------------- FIM VISTAS -----------------------------

export default App;
