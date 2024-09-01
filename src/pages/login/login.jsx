import { useState } from 'react';
import './login.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import Cookies from 'js-cookie';

function Login() {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [error , setError] = useState('');
  const [loading , setLoading] = useState(false);
  // const navigate = useNavigate();


  const handlesubmite = async (e)=>{
    e.preventDefault();
    setLoading(true);
    try{
      const response = await axios.post('https://localhost:8080/api/user/login' , 
        {
          email : email,
          password : password
        }
      );
      Cookies.set('token' , response.data.token);
      Cookies.set('_id' , response.data._id);
      Cookies.set('username' , response.data.userName);
      Cookies.set('logged' , true);
       navigate('/');
      
    }catch(e){
      setError(e.response.data.message);
    }finally{
      setLoading(false);
    }
  }


  return (
    <div id="loginPage">
      {
        (error) ? (
          <h1 style={{width : '100%', color : 'red' , textAlign : 'center' , textDecoration : 'underline'}}>{error}</h1>
        ) : (false)
      }
      <form id='formLogin' onSubmit={handlesubmite}>
        <label htmlFor="email">Email</label> 
        <input onChange={(e)=>{setError('') ; setEmail(e.target.value)}} value={email} placeholder='Your email' type="email" id='email' required/> 
        <label htmlFor="password">Password</label> 
        <input onChange={(e)=>{setError('') ; setPassword(e.target.value)}} value={password} placeholder='Your password' type="password" id='password' required /> 
        <Link to={'/register'}>Dont have account ? Register</Link>
        <button type='submit'>
          {
            (loading) ? 
            (
              <ClipLoader
              color={'##222'}
              loading={true}
              cssOverride={true}
              size={20}
              /> 
            ) :
            ('LOGIN')
          }
          </button>
      </form>
    </div>
  )
}

export default Login