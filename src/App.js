import Header from "./components/header/Header";
import { GlobalStyles } from "./GlobalStyles";
import Home from "./pages/home/Home";
function App() {
  return (
    <div>
        <Header />
        <div className="container mt-5">
         <Home /> 
        </div>
    </div>
  );
}

export default App;
