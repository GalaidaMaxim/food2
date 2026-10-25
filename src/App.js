import { Main } from "./pages/Main";
import { Categoryes } from "./pages/Categoryes";
import { Food } from "./pages/Food";
import { Routes, Route } from "react-router";
import { Loader } from "./components/Loader";
import { Category } from "./pages/Category";
import { Countryes } from "./pages/Countryes";
import { CountryFood } from "./pages/CountryFood";
function App() {
  return (
    <div className="App">
      <Loader />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/category" element={<Categoryes />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/food/:id" element={<Food />} />
        <Route path="/countryes" element={<Countryes />} />
        <Route path="/countryes/:country" element={<CountryFood />} />
      </Routes>
    </div>
  );
}

export default App;
