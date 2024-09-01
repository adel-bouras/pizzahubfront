import { useState } from 'react';
import './button.css';
import Cookies from 'js-cookie';


function Button() {
  const [loading , setLoading] = useState(false);

  const handleClick = async ()=>{
    setLoading(true);
    try{

      const response = await axios.post('https://localhost:8080/api/user/command',{
        data : {
          _id :  Cookies.get('_id'),
          productId : `${props.productId}`
        },
        headers : {
          Authorization : `Bearer ${Cookies.get('token')}`
        }
      });
    console.log(response);
    alert("👊 product commanded successfully");
    }catch(e){
      console.log(e);
    alert("😥 Fail to command this product");
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