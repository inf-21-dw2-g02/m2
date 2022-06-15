import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const manufacturers = "http://localhost:3000/Manufacturers";
const manufacturer = "http://localhost:3000/Manufacturer";

const request = axios.create({
    withCredentials: true,
  });

export default function Manufacturers() {
    const [regs, setPosts] = React.useState(null);
    const [, setState] = React.useState(null);
  
    React.useEffect(() => {
      request.get(manufacturers).then((response) => {
        setPosts(response.data);
      });
    }, []);
  
    function deleteManufacturer(event) {
      const deletedId = event.currentTarget.dataset.index;
      request.delete(`${manufacturer}/${deletedId}`).then(() => {
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
        <Link to={`/manufacturer/create`}><button style={{"margin-bottom": "20px"}} class="btn btn-success">Create Manufacturer</button></Link>
        <table style={{textAlign: "center"}} class="table table-striped table-dark" border="solid 1px">
          <thead>
            <tr>
              <th width="4%">#</th>
              <th width="25%">Name</th>
              <th width="25%">Foundation</th>
              <th width="25%">Description</th>
              <th width="10%" colspan="2"></th>
            </tr>
          </thead>
          <tbody>
            {regs.map((reg, i) => (
              <tr key={i}>
                <td>{reg.id}</td>
                <td>{reg.name}</td>
                <td>{reg.founded}</td>
                <td>{reg.description}</td>
                <td>
                  <Link to={`/manufacturer/${reg.id}`}><button class="btn btn-primary">Update</button></Link>
                </td>
                <td>
                  <button class="btn btn-danger" data-index={reg.id} onClick={deleteManufacturer}>
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