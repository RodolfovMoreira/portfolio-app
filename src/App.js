import './App.css';
import Hero from './components/hero/hero';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portifolio from './components/portfolio/portfolio';
import Testimonials from './components/testimonials/testimonials';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className="App">
      <Hero />
      <Header />
      <About />
      <Resume />
      <Portifolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
