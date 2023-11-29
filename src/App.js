import Footer from "./components/footer/Footer";
import Navigation from "./components/navgivation/Navigation";
import Best from "./pages/best/Best";

import Feedback from "./pages/Feedback/Feedback";
import Designer from "./pages/designer/Designer";

import Exclusive from "./pages/Exclusive/Exclusive";

import Home from "./pages/home/Home";
import Our from "./pages/our/Our";


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
      <Best/>
      <Our/>
      <Exclusive/>
       <Designer/>
       <Feedback/>
      <Footer/>
     
    </div>
  );
}

export default App;
