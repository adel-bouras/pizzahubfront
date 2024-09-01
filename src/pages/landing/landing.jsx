import './landing.css';
import NavBar from './../../components/navbar/nav';
import logo from './../../../public/icon.png';
import {pizzas} from './../../products';
import  {tacos} from './../../products';
import {panini} from './../../products';
import { Link } from 'react-router-dom';



function Landing() {
  
  return (
    <div id='landingPage'>
        <NavBar />
        <div id="hero">
            <img src={logo} alt="PH's logo" />
            <h1>Pizza Hub the payoneer on makeing and delivering pizza.</h1>
        </div>



        <div id="types">
            <div className='type' id="pizza">
                <h1>PIZZA</h1> <br />
                {  
                pizzas.map((element , index)=>
                  <div className="pizza">
                    <img src={element.image} alt="pizza" />
                    <h2>title : {element.title}</h2>
                    <h4>description : {element.description}</h4>
                    <h2>type : {element.type}</h2>
                  </div>  
                )
                }
            </div>



            <div className='type' id="tacos">
            <h1>TACOS</h1> <br />
            {  
                tacos.map((element , index)=>
                  <div className="tacos">
                    <img src={element.image} alt="tacos" />
                    <h2>title : {element.title}</h2>
                    <h4>description : {element.description}</h4>
                    <h2>type : {element.type}</h2>
                  </div>  
                )
                }
            </div>
            <div className='type' id="panini">
            <h1>PANINI</h1> <br />
            {  
                panini.map((element , index)=>
                  <div className="panini">
                    <img src={element.image} alt="panini" />
                    <h2>title : {element.title}</h2>
                    <h4>description : {element.description}</h4>
                    <h2>type : {element.type}</h2>
                  </div>  
                )
                }
            </div>
        </div>
                <Link style={{marginTop : '30px' ,fontSize : '20px'}} to={'/show'}>See All</Link>
        <footer>2024 pizza hub All right are reserved</footer>
    </div>
  )
}

export default Landing