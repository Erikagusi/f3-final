
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import DentistDetail from "./Routes/DentistDetail";

function App() {
  return (

    <div className="App">

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/detail/:id' element={<DentistDetail />} />
        <Route path='/favs' element={<Favs />} />
      </Routes>


      <Footer />
    </div>
  );
}

export default App;
