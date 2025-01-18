// Import React
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LayoutComponent from "./components/Layout";

// Styles
import "./styles.scss";

// Pages
const Home = lazy(() => import("./pages/Home"));

// App
const App = () => {
  return (
    <LayoutComponent>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </LayoutComponent>
  );
}

export default App;
