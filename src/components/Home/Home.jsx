import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeItem from "../items/HomeItem";
import UseSortHook from "../Sortedby/UseSortHook";

export default function Home() {
  let { getAllsorted } = UseSortHook();
  const [homegames, sethomegames] = useState([]);

  async function gethomegames() {
    let data = await getAllsorted("popularity");
    console.log(data.slice(0, 3));
    sethomegames(data.slice(0, 3));
  }

  useEffect(() => {
    gethomegames();
  }, []);

  return (
    <>
      <div className="homehead text-center py-5">
        <p className="h1">
          Find & track the best <span className="text-info">free-to-play</span>{" "}
          games!
        </p>
        <p>
          Track what you've played and search for what to play next! Plus get
          free premium loot!
        </p>
        <Link to="/all" className="text-decoration-none">
          {" "}
          <div className="d-flex justify-content-center  ">
            <button className="btn btn-dark ">
              Brows Games <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </Link>
      </div>

      <h2>Personalized Recommendations</h2>
      <HomeItem allMovie={homegames} />
    </>
  );
}
