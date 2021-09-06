import React,{useEffect,  useState} from "react";
import {ExportCSV} from './ExportCSV';
import Movie from './component/Movie';

const API="https://api.themoviedb.org/3/trending/movie/week?api_key=d1b5dbca43fc530f074d13cfdbb73d52&page=3"
let movieArray;


function App() {
  
   const[movies,setMovies]=useState([]);
   const [search, setSearch] = useState('');


   useEffect(() => {
     fetch(API)
     .then ((res) => res.json())
    .then((data)=>{ 
      // console.log("api called");
      // console.log(data.results);
      movieArray=data.results;
      setMovies(data.results);
    });
     
   }, [])

  const filteredmovies = movies.filter(movies =>
    movies.title.toLowerCase().includes(search.toLowerCase())
  );
  
   
  const filtergenre=(genre_id)=>{

     const updatedlist=movieArray.filter((movie)=>{
      return movie.genre_ids.includes(genre_id);
     });
    //  console.log(updatedlist);
     setMovies(updatedlist);
  }
const filename="movies-data-webapp";

  return (
    
    <>
    <center>
      <div>
    <input type="search" className="search" placeholder="Search for movies..."  onChange={(e)=>setSearch(e.target.value)} />
    </div>
    <div> 
      <button className="genre" onClick={()=>filtergenre(28)}>Action</button>
      <button className="genre" onClick={()=>filtergenre(12)}>Adventure</button>
      <button className="genre" onClick={()=>filtergenre(27)}>Horror</button>
      <button className="genre" onClick={()=>filtergenre(35)}>Comedy</button>
      <button className="genre" onClick={()=>filtergenre(14)}>Fantasy</button>
      <button className="genre" onClick={()=>setMovies(movieArray)}>All Movies</button>
      <ExportCSV csvData={movies} fileName={filename} />
      </div>
    </center>
    <div className="movie-container">
     {filteredmovies.length>0 && filteredmovies.map((movie) =><Movie key={movie.id} {...movie}/>)}
   </div>
   </>
  );
}

export default App;
