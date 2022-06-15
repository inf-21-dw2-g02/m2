import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const owners = "http://localhost:3000/Owners";
const owner = "http://localhost:3000/Owner";

const request = axios.create({
    withCredentials: true,
  });

export default function Owners() {
    const [regs, setPosts] = React.useState(null);
    const [, setState] = React.useState(null);
  
    React.useEffect(() => {
      request.get(owners).then((response) => {
        setPosts(response.data);
      });
    }, []);
  
    function deleteOwner(event) {
      const deletedId = event.currentTarget.dataset.index;
      request.delete(`${owner}/${deletedId}`).then(() => {
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
        <Link to={`/owner/create`}><button style={{"margin-bottom": "20px"}} class="btn btn-success">Create Owner</button></Link>
        <table style={{textAlign: "center"}} class="table table-striped table-dark" border="solid 1px">
          <thead>
            <tr>
              <th width="4%">#</th>
              <th width="25%">Name</th>
              <th width="25%">Age</th>
              <th width="25%">Sex</th>
              <th width="10%" colspan="2"></th>
            </tr>
          </thead>
          <tbody>
            {regs.map((reg, i) => (
              <tr key={i}>
                <td>{reg.id}</td>
                <td>{reg.name}</td>
                <td>{reg.age}</td>
                <td>{reg.sex}</td>
                <td>
                  <Link to={`/owner/${reg.id}`}><button class="btn btn-primary">Update</button></Link>
                </td>
                <td>
                  <button class="btn btn-danger" data-index={reg.id} onClick={deleteOwner}>
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