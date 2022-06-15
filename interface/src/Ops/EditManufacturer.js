import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const EditManufacturer = ({
    manufacturers, handleEditManufacturer, editNameMan, setEditNameMan, editFounded, setEditFounded, editDescriptionMan, setEditDescriptionMan
}) => {
    const { id } = useParams();
    const manufacturer = manufacturers.find(manufacturer => (manufacturer.id).toString() === id);

    useEffect(() => {
        if (manufacturer) {
            setEditNameMan(manufacturer.name);
            setEditFounded(manufacturer.founded);
            setEditDescriptionMan(manufacturer.description);
        }
    }, [manufacturer, setEditNameMan, setEditFounded, setEditDescriptionMan])

    return (
        <div>
            {manufacturer && <>
                <h2>Edit Manufacturer #{id}</h2>
                <form class="form-group" onSubmit={(e) => e.preventDefault()}>
                    <label class="form-label">Name:</label>
                    <input class="form-control" type="text" required value={editNameMan} onChange={(e) => setEditNameMan(e.target.value)} />

                    <label class="form-label">Founded:</label>
                    <input class="form-control" type="number" required value={editFounded} onChange={(e) => setEditFounded(e.target.value)} />

                    <label class="form-label">Description:</label>
                    <input class="form-control" type="text" required value={editDescriptionMan} onChange={(e) => setEditDescriptionMan(e.target.value)} />
                    <br/>
                    <button class="btn btn-primary" type="submit" onClick={() => handleEditManufacturer(id)}>Submit</button>
                </form>
            </>}
            {!manufacturer && <>
                <p>Missing Manufacturer #{id}</p>
                <p>Check other <Link to='/Manufacturers'>Manufacturers</Link>!</p>
            </>}
        </div>
    )
}

export default EditManufacturer;