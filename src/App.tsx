import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Activities from './sections/Activities';
import Members from './sections/Members';
import Join from './sections/Join';
import Footer from './sections/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Activities />
        <Members />
        <Join />
      </main>
      <Footer />
    </div>
  );
}

export default App;
