import React from 'react'
import { Link } from 'react-router-dom'
import style from '../All/All.module.css'

export default function HomeItem({allMovie}) {
  return (
    <>
    <div className='d-flex justify-content-center p-5'>
    {allMovie.map((card,index) =>  <Link to={`/gamedetails/${card.id}`} key={index} title='available in windows' className='mx-3 text-decoration-none'>
              <div className={style.card}>
              <img className="w-100" src={card.thumbnail} alt="" />
              <div className="content p-3">
              <div className="title d-flex justify-content-between align-items-center">
                    <h5 className=" text-light">{card.title.split(' ').slice(0,2).join(' ')}..</h5>
                    <span className="btn btn-info p-0">FREE</span>
                </div>
 
              </div>
              </div>
            </Link> ) }
    
    
            </div>
    </>
  )
}
