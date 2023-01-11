import { useEffect, useState } from "react";
import React from 'react'
import { Link, useHistory } from "react-router-dom";

const Addmovie = () => {
    const styleObj = {
        fontSize: 20,
        color: "black",
        textAlign: "center",
          paddingTop: "100px",
      };
      const[id,idchange]=useState("");
    const[movie_name,movie_namechange]=useState("");
    const[banner_image_url,banner_image_urlchange]=useState("");
    const[about_movie,about_moviechange]=useState("");
    const[languages,languageschange]=useState("");
    const[release_date,release_datechange]=useState("");
    const[movie_duration,movie_durationchange]=useState("");
    const[movie_genre,movie_genrechange]=useState("");
    
    
    const[validation,valchange]=useState(false);


    const history = useHistory();;

    const handlesubmit=(e)=>{
      e.preventDefault();
      const movies={movie_name,banner_image_url,about_movie,languages,release_date,movie_duration,movie_genre};
      

      fetch("http://localhost:5000/movies",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(movies)
      }).then((res)=>{
        alert('Movie Added.')
        history.push('/movie/admin');
      }).catch((err)=>{
        console.log(err.message)
      })

    }

    return (
        <div>

            <div className="row">
                <div className="offset-lg-2 col-lg-5">
                    <form className="container" onSubmit={handlesubmit}>
                        <div className="card" >
                            <div className="card-title">
                                <h2>ADD NEW MOVIES</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                <div className="col-lg-10">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>
                                    <br>
                                    </br>
                                    <div className="col-lg-10">
                                        <div className="form-group">
                                            <label>Movie Name</label>
                                            <input required value={movie_name} onMouseDown={e=>valchange(true)} onChange={e=>movie_namechange(e.target.value)} className="form-control"></input>
                                        
                                        </div>
                                    </div>
                                    <br>
                                    </br>

                                    <div className="col-lg-10">
                                        <div className="form-group">
                                            <label>Banner Image url</label>
                                            <input value={banner_image_url} onChange={e=>banner_image_urlchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <br>
                                    </br>
                                    <div className="col-lg-10">
                                        <div className="form-group">
                                            <label>About The Movie</label>
                                            <input value={about_movie} onChange={e=>about_moviechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <br>
                                    </br>
                                    <div className="col-lg-10">
                                        <div className="form-group">
                                            <label>Language</label>
                                            <input value={languages} onChange={e=>languageschange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <br>
                                    </br>
                                    <div className="col-lg-10">
                                        <div className="form-group">
                                            <label>Release Date</label>
                                            <input value={release_date} onChange={e=>release_datechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <br>
                                    </br>
                                    <div className="col-lg-10">
                                        <div className="form-group">
                                            <label>Movie Duration</label>
                                            <input value={movie_duration} onChange={e=>movie_durationchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
<br>
</br>
    

                                    <div className="col-lg-10">
                                        <div className="form-group">
                                        <label>Movie genre</label>
                                            <input value={movie_genre} onChange={e=>movie_genrechange(e.target.value)} className="form-control"></input>
                                            
                                        </div>
                                        
                                        <br>
                                        </br>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                           <button className="btn btn-success" type="submit">Save</button><>  </>
                                           <Link to="/movie/admin" className="btn btn-danger">Back</Link>
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


export default Addmovie