import React from 'react'
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";


const AddTheatre = () => {
    const styleObj = {
        fontSize: 20,
        color: "black",
        textAlign: "center",
          paddingTop: "100px",
      };
      const[id,idchange]=useState("");
    const[name,namechange]=useState("");
    const[timings,timingschange]=useState("");
    
    
    
    const[validation,valchange]=useState(false);


    const history = useHistory();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const cinemas={name,timings};
      

      fetch("http://localhost:5000/cinemas",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(cinemas)
      }).then((res)=>{
        alert('Movie Added.')
        history.push('/Theatre');
      }).catch((err)=>{
        console.log(err.message)
      })

    }

    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>
                        <div className="card" >
                            <div className="card-title">
                                <h2>ADD NEW Theatre And Shows</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Theatre Name</label>
                                            <input required value={name} onMouseDown={e=>valchange(true)} onChange={e=>namechange(e.target.value)} className="form-control"></input>
                                        
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Timming</label>
                                            <input value={timings} onChange={e=>timingschange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                           <button className="btn btn-success" type="submit">Save</button><>  </>
                                           <Link to="/Theatre" className="btn btn-danger">Back</Link>
                                           
                                           
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}


export default AddTheatre