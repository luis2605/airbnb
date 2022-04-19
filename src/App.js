import Header from './header';
import HeroSection from './HeroSection';
import './App.css';
import Card from './card';
import Zaferes from "./img/image 12.png"
import Wedding from "./img/wedding-photography 1.png"
import Bike from "./img/mountain-bike 1.png"
import Tai from "./img/tailand.jpg"
import Indonesia from "./img/indonesia.jpg"
import Viet from "./img/vietnam.jpg"
import Australia from "./img/australia.jpg"

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <div className='card__container'>
        <Card 
        img={Zaferes}
        rating ={5.0}
        reviews={6}
        country="USA"
        name="Life Lessons with Katie Zaferes"
        price={136}/>

        <Card 
        img={Wedding}
        rating ={5.0}
        reviews={30}
        country="USA"
        name="Learn wedding photography"
        price={125}/>

        <Card 
        img={Bike}
        rating ={4.8}
        reviews={2}
        country="USA"
        name="Group Mountain Biking"
        price={56}/>

        
        <Card 
        img={Tai}
        rating ={4.96}
        reviews={124}
        country="Thailand"
        name="Discover the Tai way on the countryside "
        price={138}/>

         
        <Card 
        img={Indonesia}
        rating ={5.0}
        reviews={202}
        country="Indonesia"
        name="Campingtour in the Jungle of Bali "
        price={68}/>

         
<Card 
        img={Viet}
        rating ={4.93}
        reviews={56}
        country="Vietnam"
        name="Discover the majestic Lan Ha Bay "
        price={158}/>

         
<Card 
        img={Australia}
        rating ={0}
        reviews={0}
        country="Australia"
        name="Two-Day Survival adventure in the australian jungle "
        price={410}/>

      </div>
    </div>
      

     
  );
}

export default App;
