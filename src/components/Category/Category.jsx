import axios from 'axios';
import React  from 'react'

import GameItem from "../items/GameItem";
import UseCategoryHook from './UseCategoryHook';

export default function Category() {

let{allMovie,showmore,loading} = UseCategoryHook() 
  return (
    <>
       <div className="row g-4 py-5">
        <GameItem allMovie={allMovie} loading={loading} />

        <div className="d-flex justify-content-center ">

          {allMovie.length < 20?null: <button onClick={showmore} className="btn btn-dark">
            More Games <i class="fa-solid fa-chevron-right"></i>
          </button> }
         
        </div>
      </div>
    </>
  )
}
