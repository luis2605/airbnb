import Header from './header';
import HeroSection from './HeroSection';
import './App.css';
import Card from './card';
import Data from "./data"


function App() {

const cards = Data.map(x =>{

return(
 
  <Card
    key={x.id}
    img={x.coverImg}
    rating={x.stats.rating}
    reviewCount={x.stats.reviewCount}
    location={x.location}
    title={x.title}
    price={x.price}
    openSpots={x.openSpots}
  

    />
)


})




  return (
    <div className="App">
      <Header />
      <HeroSection />
      <div className='card__container'>
       {cards}
      </div>
    </div>
      

     
  );
}

export default App;
