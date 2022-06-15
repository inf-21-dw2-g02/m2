import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const EditCar = ({
    cars, handleEditCar, editName, setEditName, editDescription, setEditDescription, editColor, setEditColor, 
    editEngineId, setEditEngineId, editManufacturerId, setEditManufacturerId, editOwnerId, setEditOwnerId
}) => {
    const { id } = useParams();
    const car = cars.find(car => (car.id).toString() === id);

    useEffect(() => {
        if (car) {
            setEditName(car.name);
            setEditDescription(car.description);
            setEditColor(car.color);
            setEditEngineId(car.engineId);
            setEditManufacturerId(car.manufacturerId);
            setEditOwnerId(car.ownerId);
        }
    }, [car, setEditName, setEditDescription, setEditColor, setEditEngineId, setEditManufacturerId, setEditOwnerId])

    return (
        <div>
            {car && <>
                <h2>Edit Car #{id}</h2>
                <form class="form-group" onSubmit={(e) => e.preventDefault()}>
                    <label class="form-label">Name:</label>
                    <input class="form-control" type="text" required value={editName} onChange={(e) => setEditName(e.target.value)} />

                    <label class="form-label">Description:</label>
                    <input class="form-control" type="text" required value={editDescription} onChange={(e) => setEditDescription(e.target.value)} />

                    <label class="form-label">Color:</label>
                    <input class="form-control form-control-color" type="color" required value={editColor} onChange={(e) => setEditColor(e.target.value)} />

                    <label class="form-label">EngineId:</label>
                    <input class="form-control" type="number" required value={editEngineId} onChange={(e) => setEditEngineId(e.target.value)} />

                    <label class="form-label">Manufacturer:</label>
                    <input class="form-control" type="number" required value={editManufacturerId} onChange={(e) => setEditManufacturerId(e.target.value)} />

                    <label class="form-label">Owner:</label>
                    <input class="form-control" type="number" required value={editOwnerId} onChange={(e) => setEditOwnerId(e.target.value)} />
                    <br/>
                    <button class="btn btn-primary" type="submit" onClick={() => handleEditCar(id)}>Submit</button>
                </form>
            </>}
            {!car && <>
                <p>Missing Car #{id}</p>
                <p>Check other <Link to='/Cars'>Cars</Link>!</p>
            </>}
        </div>
    )
}

export default EditCar