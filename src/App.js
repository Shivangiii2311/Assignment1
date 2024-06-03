import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './Pages/NotFount';
import Profile from './Pages/Profile';
import ProductDetails from './Pages/ViewProductDetails';
import ProductList from './Pages/Products';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
      <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
