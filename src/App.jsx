import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import { HouseContextProvider } from "./components/HouseContext";

function App() {
  return (
    <HouseContextProvider>
      <div className=" bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
        <Footer />
      </div>
    </HouseContextProvider>
  );
}

export default App;
