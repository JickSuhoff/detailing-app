import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout/RootLayout";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import ServisesPage from "./pages/ServicesPage/SevicesPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ContactsPage from "./pages/ContactPage/ContactsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/services", element: <ServisesPage /> },
      { path: "/portfolio", element: <PortfolioPage /> },
      { path: "/about", element: <AboutUsPage /> },
      { path: "/contacts", element: <ContactsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
