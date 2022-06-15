import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
const cars = "http://localhost:3000/Cars";
const car = "http://localhost:3000/Car";

const request = axios.create({
    withCredentials: true,
  });

export default function Cars() {
    const [regs, setPosts] = React.useState(null);
    const [, setState] = React.useState(null);
  
    React.useEffect(() => {
      request.get(cars).then((response) => {
        setPosts(response.data);
      });
    }, []);
  
    function deleteCar(event) {
      const deletedId = event.currentTarget.dataset.index;
      request.delete(`${car}/${deletedId}`).then(() => {
        regs.splice(
          regs.findIndex((el) => String(el.id) === String(deletedId)),
          1
        );
        setPosts(regs);
        setState({});
      });
    }
  
    if (!regs) return null;
    return (
      <div>
        <Link to={`/car/create`}><button style={{"margin-bottom": "20px"}} class="btn btn-success">Create Car</button></Link>
        <table style={{textAlign: "center"}} class="table table-striped table-dark" border="solid 1px">
          <thead>
            <tr>
              <th width="4%">#</th>
              <th width="20%">Name</th>
              <th width="15%">Description</th>
              <th width="15%">Color</th>
              <th width="10%">Engine</th>
              <th width="10%">Manufacturer</th>
              <th width="10%">Owner</th>
              <th width="4%" colspan="2"></th>
            </tr>
          </thead>
          <tbody>
            {regs.map((reg, i) => (
              <tr key={i}>
                <td>{reg.id}</td>
                <td>{reg.name}</td>
                <td>{reg.description}</td>
                <td>{reg.color}</td>
                <td>{reg.engineId}</td>
                <td>{reg.manufacturerId}</td>
                <td>{reg.ownerId}</td>
                <td>
                  <Link to={`/car/${reg.id}`}><button class="btn btn-primary">Update</button></Link>

                </td>
                <td>
                  <button class="btn btn-danger" data-index={reg.id} onClick={deleteCar}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }