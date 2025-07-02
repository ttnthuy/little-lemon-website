import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router";
import Reservations from "./pages/Reservation/Reservations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="reservations" element={<Reservations />} />

          {/* Pages have not been created */}
          <Route path="about" element={<Home />} />
          <Route path="menu" element={<Home />} />
          <Route path="order" element={<Home />} />
          <Route path="cart" element={<Home />} />
          <Route path="login" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
