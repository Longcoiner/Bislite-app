import './App.css';
import BannerSection from './components/BannerSection';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className='container'>
     <Header/>
     <BannerSection/>
     <Footer/>
    </div>
  );
}

export default App;
