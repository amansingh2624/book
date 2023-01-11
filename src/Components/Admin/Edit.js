import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Edit = () => {
    const { id } = useParams();

    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:5000/movies/" + id).then((res) => {
            return res.json();
        }).then((resp) => {
           
            movie_namechange(resp.movie_name);
            banner_image_urlchange(resp.banner_image_url);
            about_moviechange(resp.about_movie);
            languageschange(resp.languages);
            release_datechange(resp.release_date);
            movie_durationchange(resp.movie_duration);
            movie_genrechange(resp.movie_genre);

        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    
    const[movie_name,movie_namechange]=useState("");
    const[banner_image_url,banner_image_urlchange]=useState("");
    const[about_movie,about_moviechange]=useState("");
    const[languages,languageschange]=useState("");
    const[release_date,release_datechange]=useState("");
    const[movie_duration,movie_durationchange]=useState("");
    const[movie_genre,movie_genrechange]=useState("");
    
    const[active,activechange]=useState("");
    const[validation,valchange]=useState(false);


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const movies={movie_name,banner_image_url,about_movie,languages,release_date,movie_duration,movie_genre};

      fetch("http://localhost:5000/movies/"+id,{
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
                            <h2>EDIT Movie</h2>
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
                                        <label>Movie Name</label>
                                        <input input required value={movie_name} onMouseDown={e=>valchange(true)} onChange={e=>movie_namechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Banner Image</label>
                                        <input required value={banner_image_url} onMouseDown={e=>valchange(true)} onChange={e=>banner_image_urlchange(e.target.value)} className="form-control"></input>
                                    
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>About Movie</label>
                                        <input  value={about_movie} onMouseDown={e=>valchange(true)} onChange={e=>about_moviechange(e.target.value)} className="form-control"></input>
                                    
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>About Movie</label>
                                        <input  value={about_movie} onMouseDown={e=>valchange(true)} onChange={e=>about_moviechange(e.target.value)} className="form-control"></input>
                                    
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Languages</label>
                                        <input  value={languages} onMouseDown={e=>valchange(true)} onChange={e=>languageschange(e.target.value)} className="form-control"></input>
                                    
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Release Date</label>
                                        <input  value={release_date} onMouseDown={e=>valchange(true)} onChange={e=>release_datechange(e.target.value)} className="form-control"></input>
                                    
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Movie Duration</label>
                                        <input  value={movie_duration} onMouseDown={e=>valchange(true)} onChange={e=>movie_durationchange(e.target.value)} className="form-control"></input>
                                    
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                    <label>Movie Genre</label>
                                        <input value={movie_genre} onMouseDown={e=>valchange(true)} onChange={e=>movie_genrechange(e.target.value)} className="form-control"></input>
                                        
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

export default Edit