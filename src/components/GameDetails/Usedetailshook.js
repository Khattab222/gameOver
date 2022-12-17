import axios from "axios";
import  { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function UsedetailsHook() {
  let { id } = useParams();

  const [moviedetails, setmoviedetails] = useState([]);
  const [screenshots, setscreenshots] = useState([]);
  const [requirement, setrequirement] = useState({});
  const [loading, setloading] = useState(false)
 

  // function to get games by category
  async function getgameDetails(id) {
   
    const options = {
      headers: {
        "X-RapidAPI-Key": "c276191094msh2c8292cb9aa838cp10082bjsn7ca3ea7cbbbd",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    let { data } = await axios.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );

    console.log(data);
    setmoviedetails(data);
    setrequirement(data.minimum_system_requirements);
    setscreenshots(data.screenshots);
    setloading(false)
  }

 

  useEffect(() => {
    setloading(true)
    getgameDetails(id);
  }, []);



  return { moviedetails ,requirement,screenshots,loading };
}
