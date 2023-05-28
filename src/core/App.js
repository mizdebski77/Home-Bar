import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../common/Home/home";
import { Coctails } from "../common/Home/Coctails/coctails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path={"*"} element={<Home />} />
        <Route path="/:id" element={<Coctails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
