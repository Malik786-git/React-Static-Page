import Main from './Main/main'
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Footer from './footer/footer';
import Counter from './counter/counter';
import Table from './mathTables/Table';


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Main/>
      <Counter 
       headingText="Counter"
       buttonText="Click for Increamet"  
       increamentNumber={1}
       />
      <Table/>
      <Footer/>
    </>
  );
}

export default App;
