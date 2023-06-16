import "./App.css";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Product from "./pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Container, ThemeProvider } from "@mui/material";
import { theme } from "./Theme";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import Profile from "./pages/Profile/Profile";
import Orders from "./pages/Profile/Orders/Orders";
import PageLayout from "./pages/Profile/PageLayout";
import Addresses from "./pages/Profile/Addresses/Addresses";
import WishList from "./pages/Profile/WishList";
import OrderDetails from "./pages/Profile/Orders/components/OrderDetails";
import PersonalInfo from "./pages/Profile/PersonalInfo/PersonalInfo";
import Checkout from "./pages/Checkout/Checkout";
const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
const ProfileLayout = () => {
  return (
    <>
      <Navbar />
      <PageLayout />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search/:category?",
        element: <Search />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/cart", element: <Cart /> },
  { path: "/checkout", element: <Checkout /> },
  {
    path: "profile",
    element: <ProfileLayout />,
    children: [
      {
        path: "",
        element: <Profile />,
      },
      {
        path: "personal-info",
        element: <PersonalInfo />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "orders/:id",
        element: <OrderDetails />,
      },
      {
        path: "addresses",
        element: <Addresses />,
      },
      {
        path: "wish-list",
        element: <WishList />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="/search/:category" element={<Search />} />
//         <Route path="/product/:id" element={<Product />} />
//       </Route>
//       <Route path="login" element={<Login />} />
//       <Route path="cart" element={<Cart />} />
//       <Route path="profile" element={<ProfileLayout />}>
//         <Route path="personal-info" element={<PersonalInfo />} />
//         <Route path="orders" element={<Orders />} />
//       </Route>
//     </>
//   )
// );
