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
    x ={x}
  

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
