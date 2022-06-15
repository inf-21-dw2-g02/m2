import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const EditOwner = ({
    owners, handleEditOwner, editNameOwn, setEditNameOwn, editAge, setEditAge, editSex, setEditSex
}) => {
    const { id } = useParams();
    const owner = owners.find(owner => (owner.id).toString() === id);

    useEffect(() => {
        if (owner) {
            setEditNameOwn(owner.name);
            setEditAge(owner.age);
            setEditSex(owner.sex);
        }
    }, [owner, setEditNameOwn, setEditAge, setEditSex])

    return (
        <div>
            {owner && <>
                <h2>Edit Owner #{id}</h2>
                <form class="form-group" onSubmit={(e) => e.preventDefault()}>
                    <label class="form-label">Name:</label>
                    <input class="form-control" type="text" required value={editNameOwn} onChange={(e) => setEditNameOwn(e.target.value)} />

                    <label class="form-label">Age:</label>
                    <input class="form-control" type="number" min="18" max="150" required value={editAge} onChange={(e) => setEditAge(e.target.value)} />

                    <label class="form-label">Sex:</label>
                    <select class="form-control form-control" required value={editSex} onChange={(e) => setEditSex(e.target.value)}>
                    <option selected hidden>Select an option</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    </select>
                    <br/>
                    <button class="btn btn-primary" type="submit" onClick={() => handleEditOwner(id)}>Submit</button>
                </form>
            </>}
            {!owner && <>
                <p>Missing Owner #{id}</p>
                <p>Check other <Link to='/Owners'>Owners</Link>!</p>
            </>}
        </div>
    )
}

export default EditOwner;