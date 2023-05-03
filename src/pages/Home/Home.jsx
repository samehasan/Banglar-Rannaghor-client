

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
     
     <div>
      <img className='imge' src="https://uploads-ssl.webflow.com/62a2136eeda240340c0f48f1/62a361ce39e4c164baa677aa_duck-duck-goat-chicago-food-3.jpeg" alt="" />
      </div>

 
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

      <h1 className='mdl'>Have a Look of Other Cusines</h1>
      {/*
      ooooooooooooooooooooooooooooooooooooooooooooooooooooooo
      extra section 1 
      ooooooooooooooooooooooooooooooooooooooooooooooooooooooo
      */}
          <div>
          <div className="food-container">
  <div className="food-card">
    <img className="food-image" src="https://media.istockphoto.com/id/938742222/photo/cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=D1z4xPCs-qQIZyUqRcHrnsJSJy_YbUD9udOrXpilNpI=" alt="Pizza" />
    <h2 className="food-name">Pizza</h2>
    <p className="food-details">A delicious combination of cheese, tomato sauce, and various toppings baked on a crispy crust.</p>
  </div>
  <div className="food-card">
    <img className="food-image" src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3VzaGl8ZW58MHx8MHx8&w=1000&q=80" alt="Sushi" />
    <h2 className="food-name">Sushi</h2>
    <p className="food-details">A Japanese dish made of vinegared rice and various fillings, such as seafood and vegetables, rolled in seaweed.</p>
  </div>
  <div className="food-card">
    <img className="food-image" src="https://images-gmi-pmc.edge-generalmills.com/e59f255c-7498-4b84-9c9d-e578bf5d88fc.jpg" alt="Tacos" />
    <h2 className="food-name">Tacos</h2>
    <p className="food-details">A Mexican dish consisting of a tortilla filled with various ingredients, such as meat, beans, cheese, and vegetables.</p>
  </div>
  <div className="food-card">
    <img className="food-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIwQdFLGmfLumXdETQxx1vNEczgDF40am5fTf8saM3&s" alt="Pasta" />
    <h2 className="food-name">Pasta</h2>
    <p className="food-details">An Italian dish made of noodles and various sauces, such as tomato, Alfredo, and pesto.</p>
  </div>
  <div className="food-card">
    <img className="food-image" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="Burger" />
    <h2 className="food-name">Burger</h2>
    <p className="food-details">A sandwich consisting of a patty of ground beef, cheese, and various toppings, such as lettuce, tomato, and onion, served on a bun.</p>
  </div>
  <div className="food-card">
    <img className="food-image" src="https://tiffinandteaofficial.com/wp-content/uploads/2021/09/IMG_9045-1-scaled-500x500.jpg" alt="Pasta" />
    <h2 className="food-name">Biryani</h2>
    <p className="food-details">An Indian dish made of rice and various meat, such as chicken,beef,mutton.</p>
  </div>
  <div className="food-card">
    <img className="food-image" src="https://images.squarespace-cdn.com/content/v1/5ea5f3913b0ccf06d0ec2563/1593216324212-K527RACGDU12BTJH1AZW/Fuchka+%282%29.jpg?format=2500w" alt="Burger" />
    <h2 className="food-name">Panipuri</h2>
    <p className="food-details">A spicy Indian food filled with daal and termaric juice.</p>
  </div>
  <div className="food-card">
    <img className="food-image" src="https://dishingouthealth.com/wp-content/uploads/2022/01/SpicyMisoRamen_Square-500x500.jpg" alt="Ramen" />
    <h2 className="food-name">Ramen</h2>
    <p className="food-details">A Japanese dish consisting of noodles served in a meat or fish broth, with various toppings such as sliced pork, egg, and green onions.</p>
  </div>
</div>

          </div>
{/* 

oooooooooooooooooooooooooooooooooooooooooooooooooooooooo
extra section 2
oooooooooooooooooooooooooooooooooooooooooooooooooooooooooo

*/}
          <div>
          <div className="cooking-tips-container">
  <h2 className="cooking-tips-heading">5 Easy Cooking Tips</h2>
  <ul className="cooking-tips-list">
    <li className="cooking-tip">
      <span className="cooking-tip-number">1.</span>
      <p className="cooking-tip-text">Read the Entire Recipe before starting to cook to avoid missing important steps or ingredients.</p>
    </li>
    <li className="cooking-tip">
      <span className="cooking-tip-number">2.</span>
      <p className="cooking-tip-text">Make notes while you cook to keep track of any changes or adjustments you made to the recipe.</p>
    </li>
    <li className="cooking-tip">
      <span className="cooking-tip-number">3.</span>
      <p className="cooking-tip-text">Season and Taste-Test While Cooking to ensure that your dish is well-seasoned and flavorful.</p>
    </li>
    <li className="cooking-tip">
      <span className="cooking-tip-number">4.</span>
      <p className="cooking-tip-text">Substitute Items When Necessary if you don't have all the ingredients or want to make a healthier version of a recipe.</p>
    </li>
    <li className="cooking-tip">
      <span className="cooking-tip-number">5.</span>
      <p className="cooking-tip-text">Pay Attention to Your Food's Consistency to ensure that your dish has the right texture and is not overcooked or undercooked.</p>
    </li>
  </ul>
</div>

          </div>

     </div>
     
  );
};

export default Home;
