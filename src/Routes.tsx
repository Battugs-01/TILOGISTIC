import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
import Main from "pages";
const Laptop = React.lazy(() => import("pages/Laptop"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
