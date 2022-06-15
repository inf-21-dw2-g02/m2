import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const EditEngine = ({
    engines, handleEditEngine, editNameEngine, setEditNameEngine, editHP, setEditHP, editBrand, setEditBrand
}) => {
    const { id } = useParams();
    const engine = engines.find(engine => (engine.id).toString() === id);

    useEffect(() => {
        if (engine) {
            setEditNameEngine(engine.name);
            setEditHP(engine.horsepower);
            setEditBrand(engine.brand);

        }
    }, [engine, setEditNameEngine, setEditHP, setEditBrand])

    return (
        <div>
            {engine && <>
                <h2>Edit Engine #{id}</h2>
                <form class="form-group" onSubmit={(e) => e.preventDefault()}>
                    <label class="form-label">Name:</label>
                    <input class="form-control" type="text" required value={editNameEngine} onChange={(e) => setEditNameEngine(e.target.value)} />

                    <label class="form-label">Horsepower:</label>
                    <input class="form-control" type="text" required value={editHP} onChange={(e) => setEditHP(e.target.value)} />

                    <label class="form-label">Brand:</label>
                    <input class="form-control" type="text" required value={editBrand} onChange={(e) => setEditBrand(e.target.value)} />
                    <br/>
                    <button class="btn btn-primary" type="submit" onClick={() => handleEditEngine(id)}>Submit</button>
                </form>
            </>}
            {!engine && <>
                <p>Missing Engine #{id}</p>
                <p>Check other <Link to='/Engines'>Engines</Link>!</p>
            </>}
        </div>
    )
}

export default EditEngine;