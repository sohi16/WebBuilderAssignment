
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Hosting from './components/hostingcards';
import Deals from './components/deals';
import Top from './components/topsection';

function App() {
  return (
    <div className="min-h-screen bg-[#FBFCFD]">
      {/* Nav bar */}
      <Header/>

      {/* Main Content */}
      <div className="container">
        <div className='flex flex-col px-64 text-left mt-6'>
          <Top/>
          <Hosting/>
          <Deals/>
        </div>
      </div>
      
      {/*  Footer */}
      <Footer/>
    </div>

  );
}

export default App;
