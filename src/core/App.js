import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "../common/Home/home";
import { Coctails } from "../common/Home/Coctails/coctails";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path={"*"} element={<Home />} />
        <Route path="/:id" element={<Coctails />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
