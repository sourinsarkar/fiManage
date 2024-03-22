import ReactDOM from 'react-dom/client'
import App from "./App"
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignIn from './layouts/SignIn';
import SignUp from './layouts/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signin",
    element: <SignIn />
  },
  {
    path: "/signup",
    element: <SignUp />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
