import Header from "./components/header/Header";
import { GlobalStyles } from "./GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Features from "./pages/features/Features";
import Price from "./pages/pricing/Price";
function App() {
  return (
    <div>
      <GlobalStyles />
        <Header />
        <div className="container mt-5">
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/Features" element={<Features />}/>
                <Route path="/Pricing" element={<Price />}/>
            </Routes>
          </BrowserRouter>
        </div>
        <Footer /> 
    </div>
  );
}

export default App;
