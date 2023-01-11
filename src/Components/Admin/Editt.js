import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Editt = () => {
    const { id } = useParams();

    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:5000/cinemas/" + id).then((res) => {
            return res.json();
        }).then((resp) => {
           
            namechange(resp.name);
            timingschange(resp.timings);
           

        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    
    const[name,namechange]=useState("");
    const[timings,timingschange]=useState("");
    
    const[validation,valchange]=useState(false);


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const movies={name,timings};

      fetch("http://localhost:5000/cinmeas/"+id,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(movies)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/Welcome');
      }).catch((err)=>{
        console.log(err.message)
      })

    }
    return ( 
        <div>

        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>

                    <div className="card" style={{"textAlign":"left"}}>
                        <div className="card-title">
                            <h2>EDIT Theatre</h2>
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
                                        <label>Name</label>
                                        <input input required value={name} onMouseDown={e=>valchange(true)} onChange={e=>namechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>timings</label>
                                        <input required value={timings} onMouseDown={e=>valchange(true)} onChange={e=>timingschange(e.target.value)} className="form-control"></input>
                                    
                                    </div>
                                </div>
                                
                                
                                <div className="col-lg-12">
                                    <div className="form-group">
                                       <button className="btn btn-success" type="submit">Save</button>
                                       <Link to="/Welcome" className="btn btn-danger">Back</Link>
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

export default Editt