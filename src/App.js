import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import jwt_decode from "jwt-decode";
import Signup from "./components/Signup/Signup";
import LayoutRouter from "./LayoutRouter";
import Login from './components/Login/Login';
import { useEffect,useState } from "react";
import All from "./components/All/All";
import Category from "./components/Category/Category";
import Platforms from "./components/Platforms/Platforms";
import SortBy from "./components/Sortedby/SortBy";
import GameDetails from './components/GameDetails/GameDetails';



function App() {

useEffect(() => {
  if (localStorage.getItem('usertoken') !== null) {
    getusertoken()
  }
}, [])



  const [userdata, setUserdata] = useState(null);
  function getusertoken() {
    let usercode = localStorage.getItem('usertoken');
    var decoded = jwt_decode(usercode);
 
    setUserdata(decoded)

  }

  function logOut() {
    localStorage.removeItem('usertoken');
    setUserdata(null)
    
  }

  function Protection(props) {
    if (localStorage.getItem('usertoken') === null) {
      return <Navigate to='/'/>
    }else{
      return props.children
    }
  }



const router = createHashRouter([
  {path:'/', element:<LayoutRouter userdata={userdata} logOut={logOut}/>, children:[
    {path:'home', element:<Protection><Home/></Protection> },
    {path:'all', element:<Protection><All/></Protection> },
    {path:'category/:type', element:<Protection><Category/></Protection> },
    {path:'platforms/:type', element:<Protection><Platforms/></Protection> },
    {path:'sort-by/:type', element:<Protection><SortBy/></Protection> },
    {path:'gamedetails/:id', element:<Protection><GameDetails/></Protection> },
    {path:'login', element:<Login getusertoken={getusertoken}/>},
    {index:true, element:<Signup/>},
    
    {path:'*', element:<h3 className="text-center mt-5">page not found</h3>},
  ]}
])

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
