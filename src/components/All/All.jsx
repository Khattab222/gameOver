import React from "react";

import GameItem from "../items/GameItem";
import UseAllgameshook from "./UseAllgameshook";

export default function All() {
  let { allMovie, showmore,loading } = UseAllgameshook();

  return (
    <>
      <div className="row g-4 py-5">
        <GameItem allMovie={allMovie} loading={loading} />

        <div className="d-flex justify-content-center ">

          {allMovie.length <20 ? null :  <button onClick={showmore} className="btn btn-dark">
            More Games <i class="fa-solid fa-chevron-right"></i>
          </button>}
         
        </div>
      </div>
    </>
  );
}
