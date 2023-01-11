import { useEffect, useState } from "react";
import React from 'react'
import { Link, useHistory} from "react-router-dom";

import { theme } from "antd";

const Movie = () => {
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
    
    

    const [moviedata, moviedatachange] = useState(null);
    const history = useHistory();
    
    const LoadEdit = (id) => {
        history.push("/admin/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:5000/movies/" + id, {
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
        fetch("http://localhost:5000/movies").then((res) => {
            return res.json();
        }).then((resp) => {
            moviedatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        
        <div>
            
            <div style={theme} className="card">
                <div className="card-title">
                    <h2>               BOOK MY SHOW MANAGEMENT          </h2>
                </div>
                <div className="card-body">
                
                    <div className="divbtn">
                        <Link to="/Addmovie" lassName="btn btn-success">Add New  Movie(+)</Link>&nbsp;&nbsp;
                        <Link to="/Theatre" lassName="btn btn-success">Add New Theatre(+)</Link>
                        
                    </div>
                    <br>
                    
                    </br>
                    
              <table className="table table-bordered">
            <thead className="bg-dark text-white">
                            <tr>
                            <td>Id</td>
                                <th>Movie Name</th>
                                <th>Banner Image</th>
                                <th>About Movie</th>
                                <th>Language</th>
                                <th>Release date</th>
                                <th>Movie Duration</th>
                                <th>Movie genre</th>
 
                            </tr>
                        </thead>
                        <tbody>

                            {moviedata &&
                                moviedata.map(item => (
                                    <tr key={item.id}>
                                        <td> {item.id}
                                        </td>
                                        <td>{item.movie_name}</td>
                                        <td>{item.banner_image_url}</td>
                                        <td>{item.about_movie}</td>
                                        <td>{item.languages}</td>
                                        <td>{item.release_date}</td>
                                        <td>{item.movie_duration}</td>
                                        <td>{item.movie_genre}</td>
                                        
                                        
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
export default Movie