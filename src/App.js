import "./App.css";
import { Typography, Button, Avatar, TextField } from "@mui/material";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import avatar from "../src/assets/movieflix.png";
import MovieCard from "../src/components/Moviecard";
import axios from "axios";
import notfound from "../src/assets/404-error.png";






const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});


function App() {
  
  const [ val, setVal ]= useState("");
  const [movie,setmovie] = useState([]);
  const imgurl = "https://image.tmdb.org/t/p/w500";
  function handleChange(e){
   setVal(e.target.value);
  }
  
  function searchmovie(){
    const apikey = "https://api.themoviedb.org/3/search/movie?api_key=9f11699ceabf17c09ba644d3a394f830&query=" + val;
    axios.get(apikey).then((res) =>
    {         
        console.log(res);
        setmovie(res.data.results);

    }
    ).catch((error) => alert("Movie not found")) ; 
  }
   


  return (
   
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div className="logo">
          <Avatar alt="movieflix" src={avatar} />
          <Typography variant="h2" align="center" p={2} className="text">
            MovieFinder
          </Typography>
        </div>
        <center>
        <TextField color="error" focused label="Search movies" onChange={handleChange}
          type="text"
          className="input"
          name="txt"
          placeholder="Enter movie name"
          value={val} /><br></br><br></br>
          <Button variant="outlined" color="error" onClick={searchmovie}>
            Search
          </Button>
        </center>
      <div className="parent">{
         movie.map((value,index) =>
         {
           let poster;
           let val = value.overview.substring(0,100) + "...";
           if(value.poster_path === null){
            poster = "../.." + notfound;
           }
           else{
           poster = imgurl + value.poster_path;
            }
           return (<div className="child">
           <MovieCard key={index} moviePoster ={poster} movieTitle={value.title} moviedesc={val}/>
           </div>)
         })  
        }</div>
    </ThemeProvider> 

     
    
  );
}

export default App;
