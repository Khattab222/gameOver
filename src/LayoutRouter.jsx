import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'

export default function LayoutRouter({userdata,logOut}) {
  return (
    <>
      <Navbar userdata={userdata} logOut={logOut} />


<div className="container">
<Outlet/>
</div>


  
    </>
  )
}
