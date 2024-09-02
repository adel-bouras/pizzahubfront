import './landing.css';
import NavBar from './../../components/navbar/nav';
import logo from './../../../public/icon.png';
import {pizzas} from './../../products';
import  {tacos} from './../../products';
import {panini} from './../../products';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Landing() {
useGSAP(()=>{
  const tl = gsap.timeline();
  tl.from('#root' , {opacity : 0 , duration : 0 , delay : 0})
  .from('#navbar' , {y : -80 ,opacity : 0 ,duration : 1 ,delay : 1 , ease : 'expo.out'})
  .from('#hero' , {x: -50 , opacity : 0, delay : .5})
  .from('#heroText' , {y : 30 , opacity : 0 })
  .from('#heroLogo' ,{opacity : 0 , y : -10 ,ease : 'power1.inOut' })
  .to('#heroLogo' ,{ y : -30 , repeat : -1 , ease : 'power1.inOut' , yoyo : true})
  .from('#types' , {x : -50 , opacity : 0})
  .from('.pizza',{
    x : -100,
    opacity : 0,
    
    scrollTrigger : {
      trigger: ".pizza",  
      start: "top 80%",  
      end: "top 20%",    
      scrub: 1
    }
  })
  .from('.tacos',{
    x : -200,
    opacity : 0,
    scrollTrigger : {
      trigger: ".tacos",  
      start: "top 80%",  
      end: "top 20%",    
      scrub: 1
    }
  })
  .from('.panini',{
    x : -100,
    opacity : 0,
    scrollTrigger : {
      trigger: ".panini",  
      start: "top 80%",  
      end: "top 20%",    
      scrub: 1
    }
  })





})
  
  return (
    <div id='landingPage'>
        <NavBar />
        <div id="hero">
            <img id='heroLogo' src={logo} alt="PH's logo" />
            <h1 id='heroText'>Pizza Hub the payoneer on makeing and delivering pizza.</h1>
        </div>



        <div id="types">
            <div className='type' id="pizza">
                <h1>PIZZA</h1> <br />
                {  
                pizzas.map((element , index)=>
                  <div key={index} className="pizza">
                    <img src={element.image} alt="pizza" />
                    <div className="tex">

                    <h2>title : {element.title}</h2>
                    <h4>description : {element.description}</h4>
                    <h2>type : {element.type}</h2>
                    </div>

                  </div>  
                )
                }
            </div>



            <div className='type' id="tacos">
            <h1>TACOS</h1> <br />
            {  
                tacos.map((element , index)=>
                  <div key={index} className="tacos">
                    <img src={element.image} alt="tacos" />
                    <div className="tex">

                      <h2>title : {element.title}</h2>
                      <h4>description : {element.description}</h4>
                      <h2>type : {element.type}</h2>
                      </div>


                  </div>  
                )
                }
            </div>
            <div className='type' id="panini">
            <h1>PANINI</h1> <br />
            {  
                panini.map((element , index)=>
                  <div key={index} className="panini">
                    <img src={element.image} alt="panini" />
                    
                    <div className="tex">

                    <h2>title : {element.title}</h2>
                    <h4>description : {element.description}</h4>
                    <h2>type : {element.type}</h2>
                    </div>
                  </div>  
                )
                }
            </div>
        </div>
                <Link style={{marginTop : '30px' ,fontSize : '20px'}} to={(Cookies.get('logged') !== 'true') ? ('/login') : ('/show')}>See All</Link>
        <h4 id='footer'>&copy;2024 pizza hub All right are reserved</h4>
    </div>
  )
}

export default Landing