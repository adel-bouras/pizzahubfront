import { useState } from 'react';
import './register.css';
import { Link, useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import axios from 'axios';



function Register() {
  const [userName , setUserName] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [loading , setLoading] = useState(false);
  const [error , setError] = useState('');

  const navigate = useNavigate();


  const handleclick = async (e)=>{
    e.preventDefault();
    setLoading(true)
    try{
      const response = await axios.post('https://pizzahub-hqln.onrender.com/api/user/sendOTP',{
        email : email
      });
      alert(`✅ ${response.data.message}`);
      navigate('/verification' , {state :{email : email , userName : userName , password : password}});
    }catch(e){
      setError(e.response.data.message);
    }finally{
      setLoading(false);
    }
  }

  return (
    <div id='registerPage'>
        <h1>{error}</h1>
      <form onSubmit={handleclick}>
        <label htmlFor="userName">UserName</label>
        <input placeholder='Your username' onChange={(e)=>{setUserName(e.target.value)}} value={userName} type="text"required  />
        <label htmlFor="email">Email</label>
        <input placeholder='Your email' onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email"required  />
        <label htmlFor="password">Password</label>
        <input placeholder='Your password' onChange={(e)=>{setPassword(e.target.value)}} value={password} type="password"required  />
        <Link to={'/login'}>Already have an account ? Login.</Link>
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
            ('REGISTER')
          }
          </button>
      </form>
    </div>
  )
}

export default Register