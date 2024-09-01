import { useState } from 'react';
import './cookies.css';
import Cookies from 'js-cookie';


function Cookieshander() {
  const [banner , setBanner] = useState(true);

  const handlAccepte = ()=>{
    setBanner(false);
    Cookies.set('consent' , true , { expires: 360, path: '/' });
  }

  const handlDenied = ()=>{
    setBanner(false);
    Cookies.set('consent' , false , { expires: 360 });
  }

  return (!Cookies.get('consent')) ? (

        <div id='cookies'>
        <div id="text">
        <h1>We use cookies </h1>
        <p>We use cookies and other tracking technologies to improve you browsing experience on our website, to show you personalized content and tergeted ads, and preserve your login.</p>
        <a id='pp' href="/privacy">privacy policy</a>
        </div>
        <div id="cookiesButtons">
        <button className='cbuts' onClick={handlDenied}>Denied</button>
        <button className='cbuts'id='accept' onClick={handlAccepte}>Accepte</button>
        </div>
        </div>
      ) : (false)
}

export default Cookieshander