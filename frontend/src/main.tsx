import ReactDOM from 'react-dom/client'
import App from "./App"
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignIn from './layouts/SignIn';
import SignUp from './layouts/SignUp';
import Dashboard from './layouts/Dashboard';
import { Provider } from 'react-redux';
import { store } from "./store/store";

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
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
