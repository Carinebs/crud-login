import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './views/Login';
import Register from './views/Register';
import User from './views/User';

const router  = createBrowserRouter([
  {
   path: "/",
   element: <Login />
  },
  {
    path: "/register",
    element: <Register />
   },
   {
    path: "/user",
    element: <User />
   }

]);

function App() {
  return (
   <RouterProvider router={router} />
  );
}

export default App;
