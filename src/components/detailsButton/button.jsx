import { ClipLoader } from 'react-spinners';
import './button.css';
import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';


function Button(props) {
  const [loading , setLoading] = useState(false);

  const handleclick = async ()=>{
    setLoading(true);
    try{

      const response = await axios.get('https://localhost:8080/api/user/details',{
        params : {
          productId : `${props.productId}`
        },
        headers : {
          Authorization : `Bearer ${Cookies.get('token')}`
        }
      });
    console.log(response);
    
    }catch(e){
      console.log(e);
      
    }finally{
      setLoading(false);
    }
  }

  return (
    <button id='detailsButton' onClick={handleclick}>
      {
      (loading) ? (

    <ClipLoader
        color={'##222'}
        loading={true}
        cssOverride={true}
        size={20}
        /> 
      ) : (
      'more details'
      )}
    </button> 
  )
}

export default Button