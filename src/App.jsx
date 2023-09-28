import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Shared/Layout";
import Dashboard from './Components/Dashboard/Dashboard'
import Products from "./Components/Products/Products";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="products" element={<Products />}></Route>
        </Route>
        <Route path="login" element = {<div>This is Login</div>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
