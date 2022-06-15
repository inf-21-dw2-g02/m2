import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const engines = "http://localhost:3000/Engines";
const engine = "http://localhost:3000/Engine";

const request = axios.create({
    withCredentials: true,
  });

export default function Engines() {
    const [regs, setPosts] = React.useState(null);
    const [, setState] = React.useState(null);
  
    React.useEffect(() => {
      request.get(engines).then((response) => {
        setPosts(response.data);
      });
    }, []);
  
    function deleteEngine(event) {
      const deletedId = event.currentTarget.dataset.index;
      request.delete(`${engine}/${deletedId}`).then(() => {
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
        <Link to={`/engine/create`}><button style={{"margin-bottom": "20px"}} class="btn btn-success">Create Engine</button></Link>
        <table style={{textAlign: "center"}} class="table table-striped table-dark" border="solid 1px">
          <thead>
            <tr>
              <th width="4%">#</th>
              <th width="20%">Name</th>
              <th width="20%">HP</th>
              <th width="20%">Brand</th>
              <th colspan="2" width="10%"></th>
            </tr>
          </thead>
          <tbody>
            {regs.map((reg, i) => (
              <tr key={i}>
                <td>{reg.id}</td>
                <td>{reg.name}</td>
                <td>{reg.horsepower}</td>
                <td>{reg.brand}</td>
                <td>
                  <Link to={`/engine/${reg.id}`}><button class="btn btn-primary">Update</button></Link>
                </td>
                <td>
                  <button class="btn btn-danger" data-index={reg.id} onClick={deleteEngine}>
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