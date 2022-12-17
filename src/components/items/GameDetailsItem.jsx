import React from "react";

export default function GameDetailsItem({
  moviedetails,
  requirement,
  screenshots,
  loading
}) {
  return (
    <>


    {loading === true?
    <div className="text-light loading">
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
      </div>:    
    <div className="row my-2 ">
        <div className="col-md-4">
            <div className="img">
                <img className='w-100 rounded' src={moviedetails.thumbnail} alt="" />
            </div>
          <div className='mt-4'>
          <button className='btn btn-dark'>free</button>
            <a target='blank' href={moviedetails.game_url}><button className='btn btn-info w-75 ms-4'>PLAY NOW <i class="fa-solid fa-right-from-bracket"></i></button></a>
          </div>
        </div>
        <div className="col-md-8">
            <h2 className='fw-bold text-light'>{moviedetails.title}</h2>
            <p className='fw-bold text-light'> About {moviedetails.title}</p>
            <p>{moviedetails.description}</p>



            {moviedetails.minimum_system_requirements? <>
                <h5 className='fw-bold text-light'>Minimum System Requirements</h5>
        <div><span className='fw-bold'>graphic : </span> {requirement.graphics} </div>
        <div><span className='fw-bold'>memory : </span>  {requirement.memory}  </div>
        <div><span className='fw-bold'>os :</span>  {requirement.os} </div>
        <div><span className='fw-bold'>processor :</span> {requirement.processor} </div>
        <div><span className='fw-bold'>storage :</span> {requirement.storage} </div>
            </>:null}
      

        <h5 className='fw-bold my-3'>Diablo Immortal Screenshots</h5>

        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
   
    {screenshots.map((image) =>  <div class="carousel-item active">
      <img src={image.image} class="d-block w-100" alt="..."/>
    </div> )}
  </div>
</div>




        <p className='fw-bold text-light'>Additional Information</p>
        <div  className="row mb-3">
            <div  className="col-6 col-md-4">
                <span  className="text-muted">Title</span>
                <p>{moviedetails.title}</p>
                </div>
                <div  className="col-6 col-md-4">
                <span  className="text-muted">Developer</span>
                <p>{moviedetails.developer}</p>
                </div>
                <div  className="col-6 col-md-4">
                <span  className="text-muted">Publisher</span>
                <p>{moviedetails.publisher}</p>
                </div>
                <div  className="col-6 col-md-4">
                <span  className="text-muted">Release Date</span>
                <p>{moviedetails.release_date}</p>
                </div>
                <div  className="col-6 col-md-4">
                <span  className="text-muted">Genre</span>
                <p>{moviedetails.genre}</p>
                </div>
                <div  className="col-6 col-md-4">
                <span  className="text-muted">Platform</span>
                <p>{moviedetails.platform} {moviedetails.platform === "Windows"? <span><i className="fa-brands fa-windows "></i></span> : <span><i className="fa-solid fa-window-maximize "></i></span>}</p>
                
                </div>
                
                
                
       </div>
        
        
        
        </div>
    </div> }
      

   
    </>
  );
}
