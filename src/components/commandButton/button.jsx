import { useState } from 'react';
import './button.css';
import Cookies from 'js-cookie';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';



function Button(props) {
  const [loading , setLoading] = useState(false);

  const handleClick = async ()=>{
    setLoading(true);
    try{

      const response = await axios.post('https://pizzastoreback.onrender.com/api/user/command',
        {
          _id :  Cookies.get('_id'),
          productId : `${props.productId}`
        },{
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
          }
        }
      );
    alert(`👊  ${response.data.message}`);
    }catch(e){
    alert(`😥 ${e.response.data.message}`);
    }finally{
      setLoading(false);
    }
  }

  return (
    <button id='commandButton' onClick={handleClick}>
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
        ('Command')
      }
      
      </button>
  )
}

export default Button