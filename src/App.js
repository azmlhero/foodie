import "./App.css";
import Home from "./components/landingPage/Home";
import Product from "./components/Product";
import Order from "./components/checkOutForm/Order";
import Bill from "./components/Bill";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/product/:id" element={<Product />} />
          <Route exact path="/order" element={<Order />} />
          <Route exact path="/bill" element={<Bill />} />

          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
