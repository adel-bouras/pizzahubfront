import './details.css';
import NavBar from './../../components/navbar/nav';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Command from './../../components/commandButton/button';
import { ClipLoader } from 'react-spinners';



function Details() {
  const location = useLocation();
  const [product, setProduct] = useState(location.state?.data || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (product) {
          // Fetch images
          const imagePromises = product.images.map(async (img) => 
            await axios.get(`https://pizzahub-hqln.onrender.com/uploads/${img}`, { responseType: 'blob' })
          );

          const imageResponses = await Promise.all(imagePromises);
          const imageUrls = imageResponses.map(response => URL.createObjectURL(response.data));

          // Update product with image URLs
          setProduct(prevProduct => ({
            ...prevProduct,
            images: imageUrls
          }));
        }
      } catch (e) {
        setError(e.response.data.message);
      } finally{
        setLoading(false)
      }
    };

    fetchData();
  }, []);

  return (
    <div id='detailsPage'>
      <NavBar />
      {

        (error) ? (false) : (
          (loading) ? (
            <ClipLoader color={'#222'} loading={loading} size={255} />
          ) : (

            <div id="productDetails">
            <h1>Title: {product.name}</h1>
            <h2>Type: {product.type}</h2>
            <h3>Description: {product.description}</h3>
            <div id="imageGallery">
            { product.images.map((url, index) => (
              <img key={index} src={url} alt={`Product ${index}`} />
            ))
          }
          </div>
          <Command productId={product._id}/>
      </div>
          )
        )
    }
    </div>
  );
}

export default Details;
