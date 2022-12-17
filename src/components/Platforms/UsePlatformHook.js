import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function UsePlatformHook() {
  let { type } = useParams();

  const [categorygames, setcategorygames] = useState([]);
  const [slicenumber, setslicenumber] = useState(20);
  const [loading, setloading] = useState(false)

  // function to get games by category
  async function getAllplatforms(typecat) {
    const options = {
      headers: {
        "X-RapidAPI-Key": "c276191094msh2c8292cb9aa838cp10082bjsn7ca3ea7cbbbd",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    let { data } = await axios.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${typecat}`,
      options
    );

    console.log(data.slice(0, 20));
    setcategorygames(data.slice(0, slicenumber));
    setloading(false)

  }

  function showmore() {
    setslicenumber(slicenumber + 20);

    getAllplatforms(type);
  }

  useEffect(() => {
    setloading(true)

    getAllplatforms(type);
  }, [slicenumber]);

  useEffect(() => {
    setloading(true)
    getAllplatforms(type);
    setslicenumber(20);
  }, [type]);

  return { categorygames, showmore,loading };
}
