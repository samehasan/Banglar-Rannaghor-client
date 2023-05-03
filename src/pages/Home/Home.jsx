

import { Link } from 'react-router-dom';
import './Home.css';
import { useEffect, useState } from 'react';
const Home = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allData")
      .then((response) => response.json())
      .then((data) => setServicesData(data));
  }, []);
  return (

     <div>
     <img className='imge' src="https://uploads-ssl.webflow.com/62a2136eeda240340c0f48f1/62a361ce39e4c164baa677aa_duck-duck-goat-chicago-food-3.jpeg" alt="" />

 
 <h1 className='mdl'>Chef Overview</h1>
      <div className="services">
        {servicesData?.services?.map((service) => (
          <div key={service?.id} className="service-card">
            <img  src={service?.picture} alt={service?.name} />
            <h2>{service?.name}</h2>
            <p>Years of Experience: {service?.years_of_experience}</p>
            <p>Recipe: {service?.recipe}</p>
            <p>Likes: {service?.likes}</p>
            <Link to={`/services/${service?.id}`}>
              <button>View Recipes</button>
            </Link>
          </div>
        ))}
      </div>

     </div>
     
  );
};

export default Home;
