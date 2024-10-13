import React from 'react'
import GameDetailsItem from '../items/GameDetailsItem'
import UsedetailsHook from './Usedetailshook'


export default function GameDetails() {


    let {moviedetails ,requirement,screenshots,loading } = UsedetailsHook();

   

    console.log(screenshots)
    console.log(requirement)
  return (
    <>
    <GameDetailsItem moviedetails={moviedetails} requirement={requirement} screenshots={screenshots} loading={loading}  />
    
    </>
  )
}
