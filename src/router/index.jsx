// src/router/index.jsx
import { createBrowserRouter, Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import PA from "../pages/pa";
import WD from "../pages/Wd";
import CS from "../pages/Cs";
import MA from "../pages/Ma";
import Industries from "../pages/Industries";
import Healthcare from "../pages/healthcare";
import Manufacturing from "../pages/manufacturing";
import Retail from "../pages/retail";
import Finance from "../pages/finance";
import Education from "../pages/education";
import OurWork from "../pages/OurWork";
import About from "../pages/About";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "services/process-automation", element: <PA /> },
        { path: "services/web-designing", element: <WD /> },
        { path: "services/custom-software", element: <CS /> },
        { path: "services/mobile-apps", element: <MA /> },
        { path: "industries", element: <Industries /> },
        { path: "industries/healthcare", element: <Healthcare /> },
        { path: "industries/manufacturing", element: <Manufacturing /> },
        { path: "industries/retail", element: <Retail /> },
        { path: "industries/finance", element: <Finance /> },
        { path: "industries/education", element: <Education /> },
        { path: "our-work", element: <OurWork /> },
        { path: "about", element: <About /> },
        { path: "careers", element: <Careers /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

export default router;