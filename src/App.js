import "./App.css";
import { NavBarComponent } from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/Home/HomePage";
import { InstructorsPage } from "./pages/Instructor/InstructorPage";
import { Routes as RoutesConstant } from "./constants/routes";
import { CoursesPage } from "./pages/Courses/CoursesPage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarComponent />
        <Routes>
          <Route path={RoutesConstant.home} element={<HomePage />} />
          <Route path={`${RoutesConstant.instructor}/:id`} element= {<InstructorsPage />} />
          <Route path={RoutesConstant.Courses} element={<CoursesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
