import './nav.css';
import Login from './../loginButton/button';
import Register from './../registerButton/button';
import Cookies from 'js-cookie'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



function Nav() {
  const navigate = useNavigate()

  const [style , setStyle] = useState({display : 'none'});

  const handlClick = ()=>{

    if(style.display === 'none'){
      setStyle({ display : 'block' })
    }else{
      setStyle({ display : 'none' })
    }
  }

const handlLogout = ()=>{
  const allCookies = Cookies.get();
  for (let cookie in allCookies) {
    if(cookie !== 'consent') Cookies.remove(cookie);
  }
  navigate('/');
}
  

  return (
    <div id='navbar'>
      <h1>P
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-80 80-680q85-72 186.5-116T480-840q112 0 213.5 43.5T880-680L480-80Zm0-144 292-438q-65-45-139-71.5T480-760q-79 0-152.5 26.5T188-662l292 438ZM380-560q25 0 42.5-17.5T440-620q0-25-17.5-42.5T380-680q-25 0-42.5 17.5T320-620q0 25 17.5 42.5T380-560Zm100 200q25 0 42.5-17.5T540-420q0-25-17.5-42.5T480-480q-25 0-42.5 17.5T420-420q0 25 17.5 42.5T480-360Zm0 136Z"/></svg>
        H</h1>
      <div id="navbts">
        {
          (!Cookies.get('token')) ? 
          (
            <>
            <Register />
            <Login />
            </>
          ) :
          (<>
            <h2 onClick={handlClick} id='username'>{Cookies.get('username')}</h2>
            <button id='logout' onClick={handlLogout}>LOGOUT</button>
            <div style={style} id='userPropriety'>
              <Link to={'/show'}>List All our pizza</Link>
              <hr />
              <Link to={'/commands'}>List All your commands</Link>
            </div>

          </>)
        }
      </div>
    </div>
  )
}

export default Nav


