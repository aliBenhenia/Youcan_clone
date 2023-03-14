import Header from "./components/header/Header";
import { GlobalStyles } from "./GlobalStyles";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div>
        <Header />
        <div className="container mt-5">
         <Home /> 
        </div>
        <Footer /> 
    </div>
  );
}

export default App;
