import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import NotFound from "../pages/NotFound/NotFound";
import Home  from '../pages/Home/Home'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;