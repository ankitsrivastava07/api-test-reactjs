import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import PageNotFound from './PageNotFound'
import Header from './Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;