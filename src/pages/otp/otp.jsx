import { useState } from 'react';
import './otp.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from'js-cookie';
import { ClipLoader } from 'react-spinners';


function Otp() {
  const navigate = useNavigate();
  const location = useLocation();
  const {userName , email , password } = location.state || {};
  const [loading , setLoading] = useState(false);

  const [first , setFirst] = useState('')
  const [second , setSecond] = useState('')
  const [third , setThird] = useState('')
  const [fourth , setFourth] = useState('')
  const [error , setError] = useState('')

  const handlclick = async (e)=>{
    e.preventDefault();
    setLoading(true);
    try{
      const code = first + second + third + fourth;
      const response = await axios.post('https://pizzahub-hqln.onrender.com/api/user/register',{
        email : email ,
        password : password,
        userName : userName,
        otp : code
      });
      Cookies.set('_id' , response.data._id);
      Cookies.set('username' , response.data.userName);
      Cookies.set('token' , response.data.token);
      Cookies.set('logged' , true);
      alert('✅ register success');
      navigate('/');
    }catch(e){
      setError(e.response.data.message);
    }finally{
      setLoading(false);
    }
  }

  return (
    <div id='otpPage'>
      {
        (error) ? (
          <h1 style={{color : 'red' , width : '100%' , textAlign : 'center' , textDecoration : 'underline'}}>{error}</h1>
        ) : (false)
      }
      <form onSubmit={handlclick}>
        <div id="otpButs">
        <input onChange={(e)=>{ setError(null) ; setFirst(e.target.value)}} value={first} maxLength={1} autoFocus type="text" />
        <input onChange={(e)=>{ setError(null) ; setSecond(e.target.value)}} value={second} maxLength={1}  type="text" />
        <input onChange={(e)=>{ setError(null) ; setThird(e.target.value)}} value={third} maxLength={1}  type="text" />
        <input onChange={(e)=>{ setError(null) ; setFourth(e.target.value)}} value={fourth} maxLength={1}  type="text" />
        </div>
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
            ('validate')
          }
          </button>
      </form>
    </div>
  )
}

export default Otp