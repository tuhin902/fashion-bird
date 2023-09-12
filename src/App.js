import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import OurFacourits from './Components/OurFavourits/OurFacourits';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <Navbar></Navbar>
      <Banner />
      <OurFacourits />
    </div>
  );
}

export default App;
