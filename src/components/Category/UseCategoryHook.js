import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function UseCategoryHook() {
  let { type } = useParams();

  const [allMovie, setallMovie] = useState([]);
  const [slicenumber, setslicenumber] = useState(20);
  const [loading, setLoading] = useState(false)

  // function to get games by category
  async function getAllCategory(typecat) {
    const options = {
      headers: {
        "X-RapidAPI-Key": "c276191094msh2c8292cb9aa838cp10082bjsn7ca3ea7cbbbd",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    let { data } = await axios.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${typecat}`,
      options
    );

    console.log(data.slice(0, 20));
    setallMovie(data.slice(0, slicenumber));
    setLoading(false)
  }

  function showmore() {
    setslicenumber(slicenumber + 20);

    getAllCategory(type);
  }

  useEffect(() => {
    setLoading(true)
    getAllCategory(type);
  }, [slicenumber]);

  useEffect(() => {
    setLoading(true)
    getAllCategory(type);
    setslicenumber(20);
  }, [type]);

  return { allMovie, showmore,loading };
}
