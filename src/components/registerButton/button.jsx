import './register.css';
import { useNavigate } from 'react-router-dom';


function Button() {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate('./register');
  }

  return (
    <button id='registerButton' onClick={handleClick}>Register</button>
  )
}

export default Button