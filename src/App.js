import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Cart } from "./componant/Cart";
import { Header } from "./componant/Header";
import { Home } from "./componant/Home";
import "./styles.css";

export default function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
