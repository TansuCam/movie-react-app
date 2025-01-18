// Import React
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Pages
const Home = lazy(() => import("./pages/Home"));

// App
const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default App;
