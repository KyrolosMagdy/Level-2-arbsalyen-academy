import './App.css';
import { NavBarComponent } from './components/NavBar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from './pages/Home/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
