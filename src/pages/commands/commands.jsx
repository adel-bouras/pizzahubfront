import './command.css';
import { useEffect, useState } from 'react';
import NavBar from './../../components/navbar/nav';
import axios from 'axios';
import Cookies from 'js-cookie';
import { ClipLoader } from 'react-spinners';
import Details from './../../components/detailsButton/button';

function Commands() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://pizzastoreback.onrender.com/api/user/listCommands?_id=${Cookies.get('_id')}`, {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
          }
        });
        const fetchedData = response.data.data;
        

        // Fetch images
        const imagePromises = fetchedData.flatMap(ob =>
          ob.images.map(img => 
            axios.get(`https://pizzastoreback.onrender.com/uploads/${img}`, { responseType: 'blob' })
          )
        );

        const imageResponses = await Promise.all(imagePromises);
        const imageUrls = imageResponses.reduce((acc, response, index) => {
          const url = URL.createObjectURL(response.data);
          acc[index] = url;
          return acc;
        }, {});

        // Add image URLs to the data
        const dataWithImages = fetchedData.map((ob, obIndex) => ({
          ...ob,
          images: ob.images.map((img, imgIndex) => imageUrls[obIndex * ob.images.length + imgIndex])
        }));

        setData(dataWithImages);
        
      } catch (e) {
        console.log(e);
        
        setError(e.response?.data?.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div id='commandPage'>
      <NavBar />
      {
        error ? (
          <h1 style={{ width: '100%', textAlign: 'center', color: 'grey' }}>Couldn't bring data ...</h1>
        ) : (
          <div id="products">
            {loading ? (
              <div id="loading">
              <ClipLoader color={'#222'} loading={loading} size={255} />
              </div>
            ) : (
              data.map((element, index) => (
                <div key={index} className="product">
                  {element.images[0] && <img src={element.images[0]} alt="Product" />}
                  <h1>Type: {element.type}</h1>
                  <h2>Name: {element.name}</h2>
                  <h3>Description: {element.description}</h3>
                  <Details productId={element._id} />
                </div>
              ))
            )}
          </div>
        )
      }
    </div>
  );
}

export default Commands;
