

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
     <img src="https://image.slidesharecdn.com/bengalicuisine-130522014817-phpapp02/85/bengali-cuisine-1-320.jpg?cb=1665716479" alt="" />

 {/* <h1>Our Services</h1> */}
 <div className="services">
        {servicesData?.services?.map((service) => (
          <div key={service?.id} className="service-card">
            <h2>{service?.name}</h2>
            <p>{service?.description}</p>
            {/* <ul>
              {service?.items?.map((item) => (
                <li key={item?.id}>
                  {item?.name} - ${item?.price}
                </li>
              ))}
            </ul> */}
            <p>Likes: ${service?.likes}</p>
            <p>Bio: {service?.bio}</p>
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
