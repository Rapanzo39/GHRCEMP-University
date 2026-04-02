
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans selection:bg-blue-200 dark:selection:bg-blue-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
