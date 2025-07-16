





import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import About from './components/About';
import Home from './components/Home';
import Order from './components/Order';
import CategoryPage from './components/Categorypage'; 

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/orders" element={<Order />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />

            {/* ✅ Add this dynamic category route */}
            <Route path="/category/:name" element={<CategoryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

