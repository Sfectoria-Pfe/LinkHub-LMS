import Navbare from "../navbar/navbare";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";

function Layouts() {
  const location = useLocation();

  return (
    <>
      {/* Afficher la navbar uniquement si l'URL n'est pas "/Dashboard" */}
      {location.pathname !== "/Dashboard" && <Navbare />}
      
      <Outlet />
      
      {/* Afficher le footer sur toutes les pages sauf "/login" et "/register" */}
      {!["/login", "/register"].includes(location.pathname) && <Footer />}
    </>
  );
}

export default Layouts;
