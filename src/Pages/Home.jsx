
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Doings from '../Components/Doings';
import Services from '../Components/Services';
import Project from '../Components/Project';
// import Spend from '../Components/Spend';
import Contribute from '../Components/Contribute';
import Events from '../Components/Events';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Doings />
        <Services />
        <Project />
        {/* <Spend /> */}
        <Contribute />
        <Events />
        <Footer />
        

    </div>
  )
}

export default Home