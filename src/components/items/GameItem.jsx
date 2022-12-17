import React from 'react'
import { Link } from 'react-router-dom'
import style from '../All/All.module.css'

export default function GameItem({allMovie,loading}) {
  return (
    <>
    {loading === true?<div className="text-light loading">
        <div class="sk-cube-grid ">
          <div class="sk-cube sk-cube1"></div>
          <div class="sk-cube sk-cube2"></div>
          <div class="sk-cube sk-cube3"></div>
          <div class="sk-cube sk-cube4"></div>
          <div class="sk-cube sk-cube5"></div>
          <div class="sk-cube sk-cube6"></div>
          <div class="sk-cube sk-cube7"></div>
          <div class="sk-cube sk-cube8"></div>
          <div class="sk-cube sk-cube9"></div>
        </div>
      </div> :<>   {allMovie.map((card,index) => 
     <Link to={`/gamedetails/${card.id}`} key={index} title='available in windows' className="col-sm-3 text-decoration-none text-light">
              <div className={style.card}>
              <img className="w-100" src={card.thumbnail} alt="" />
              <div className="content p-3">
              <div className="title d-flex justify-content-between align-items-center">
                    <h5 className=" text-light">{card.title.split(' ').slice(0,2).join(' ')}..</h5>
                    <span className="btn btn-info p-0">FREE</span>
                </div>
                <small>{card.short_description.split(' ').slice(0,4).join(' ')}... </small>
                <div className="footer d-flex justify-content-between align-items-center mt-3 ">
                    <div><i className="fa-regular fa-square-plus"></i></div>
                    <div className="d-flex align-items-center ">
                        <span className={style.textdark}>{card.genre}</span>

                        {card.platform === 'PC (Windows)'?<div><i className="fa-brands fa-windows "></i></div>:'' }
                        {card.platform === 'Web Browser'?<div><i className="fa-solid fa-window-maximize "></i></div>:'' }
                        
                        
                    </div>
                </div>
              </div>
              </div>
            </Link> ) }</>  }
  
  
    
    
    
    
  
    
    
    
    </>
  )
}
