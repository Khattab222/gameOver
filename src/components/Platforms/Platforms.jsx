import React from 'react'
import GameItem from '../items/GameItem'
import UsePlatformHook from './UsePlatformHook'




export default function Platforms() {
let {categorygames, showmore,loading} = UsePlatformHook()

  return (
   <div className="row g-4 py-5">
        <GameItem allMovie={categorygames} loading={loading} />

        <div className="d-flex justify-content-center ">

          {categorygames.length < 20?null: <button onClick={showmore} className="btn btn-dark">
            More Games <i class="fa-solid fa-chevron-right"></i>
          </button> }
         
        </div>
      </div>
  )
}
