import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/search";
import Cart from "./pages/Cart";

const App = () => {
  return;
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </Router>;
};

export default App;
