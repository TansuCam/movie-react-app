// Import React
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LayoutComponent from "./components/Layout";

// Styles
import "./styles.scss";

// Components
import LoadingSpinner from "./components/Loading";
import NotFound from "./components/NotFound";

// Pages
const Home = lazy(() => import("./pages/Home"));
const MovieDetail = lazy(() => import("./pages/MovieDetail"));

// App
const App = () => {
  return (
    <LayoutComponent>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </LayoutComponent>
  );
}

export default App;
