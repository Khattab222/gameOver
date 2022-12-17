import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function UseSortHook() {
  let { type } = useParams();

  const [Sortedgames, setSortedgames] = useState([]);

  const [slicenumber, setslicenumber] = useState(20);
  const [loading, setloading] = useState(false);

  // function to get games by category
  async function getAllsorted(typecat) {
    const options = {
      headers: {
        "X-RapidAPI-Key": "c276191094msh2c8292cb9aa838cp10082bjsn7ca3ea7cbbbd",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    let { data } = await axios.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${typecat}`,
      options
    );

    setSortedgames(data.slice(0, slicenumber));
    setloading(false);

    return data;
  }

  function showmore() {
    setslicenumber(slicenumber + 20);

    getAllsorted(type);
  }

  useEffect(() => {
    getAllsorted(type);
  }, [slicenumber]);

  useEffect(() => {
    setloading(true);
    getAllsorted(type);

    setslicenumber(20);
  }, [type]);

  return { Sortedgames, showmore, getAllsorted };
}
