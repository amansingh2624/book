import { useEffect, useState } from "react";
import React from 'react'
import { Link, useHistory} from "react-router-dom";

import { theme } from "antd";

const Theatre = () => {
    const styles = theme => ({
        root: {
          width: "80%",
          marginTop: 0,
          fontSize: 8
        },
        table: {},
        row: {
          border: "none",
          "&:nth-of-type(odd)": {
            backgroundColor: "red"
          }
        },
        body: {
          fontSize: 8,
          border: "none"
        }
      });
    
    

    const [Theatredata, Theatredatachange] = useState(null);
    const history = useHistory();
    
    const LoadEdit = (id) => {
        history.push("/admin/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:5000/cinemas/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

    useEffect(() => {
        fetch("http://localhost:5000/cinemas").then((res) => {
            return res.json();
        }).then((resp) => {
            Theatredatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        
        <div>
            
            <div style={theme} className="card">
                <div className="card-title">
                   
                </div>
                <div className="card-body">
                <div className="divbtn">
                        <Link to="/AddTheatre" lassName="btn btn-success">Add New theatre and Shows(+)</Link>
                        
                        
                    </div>
                    
              <table className="table table-bordered">
            <thead className="bg-dark text-white">
                            <tr>
                            <td>Id</td>
                                <th> Name</th>
                                <th>Timing</th>
                               
                                

                               
                            </tr>
                        </thead>
                        <tbody>

                            {Theatredata &&
                                Theatredata.map(item => (
                                    <tr key={item.id}>
                                        <td> {item.id}
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.timing}</td>
                                        
                                        
                                        
                                        <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
                                            
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                    </div>
                    </div>


</div>




    );
}
export default Theatre