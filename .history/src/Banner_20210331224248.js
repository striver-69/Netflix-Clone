import React,{useEffect,useState} from 'react'
import axios from './axios'
import requests from './request'

function Banner() {
  const [movie,setMovie]=useState([])

  useEffect(()=>{
    async function fetchData(){
      const request=await axios.get(requests.fetchNetflixOriginals)
      setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length)])
      return request
    }
    fetchData()
  },[])

  console.log(movie)
  
  return (
    <header className="banner" style={{backgroundSize:"cover", backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,backgroundPosition:"center center"}}>
      <div className="banner__contents">

      </div>
    </header>
  )
}

export default Banner
