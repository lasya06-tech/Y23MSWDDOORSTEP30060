import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Products from './Components/Products';
import Login from './Components/Login';
import Welcome from './Components/Welcome';
import ApiProducts from './Components/ApiProducts';
import Register from './Components/Register';
import Catalog from './Components/Catalog';


function App() {
  return (
    <Router>
    <div>
      <Header />
      <Routes>
          {/* Home Route (Header only) */}
          <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
          {/* Banner Route */}
          <Route path="/banner" element={<Banner />} />

          <Route path="/products" element={<Products />} />

        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />}   />
        <Route path="/apiproduct" element={<ApiProducts />}  />
        <Route path="/register" element={<Register />}  />
        <Route path="/catalog" element={<Catalog />}  />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
