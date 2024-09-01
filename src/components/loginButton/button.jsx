import './login.css';
import { useNavigate } from 'react-router-dom';


function Button() {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate('./login');
  }

  return (
    <button id='loginButton' onClick={handleClick}>Login</button>
  )
}

export default Button