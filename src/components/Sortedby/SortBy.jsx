import React from 'react'
import GameItem from '../items/GameItem'
import UseSortHook from './UseSortHook'

export default function SortBy() {


    let { Sortedgames, showmore,loading } = UseSortHook()
  return (
    <div className="row g-4 py-5">
    <GameItem allMovie={Sortedgames} loading={loading} />

    <div className="d-flex justify-content-center ">

      {Sortedgames.length < 20?null: <button onClick={showmore} className="btn btn-dark">
        More Games <i class="fa-solid fa-chevron-right"></i>
      </button> }
     
    </div>
  </div>
  )
}
