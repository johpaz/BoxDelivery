/* eslint-disable react-hooks/exhaustive-deps */
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSessionState } from "./services/zustand/useSession";
 import FormUpdate from "../src/views/DashboardSuppliers/formUpdateProfile/FormUpdateProfile";
import Categories from "./views/Categories/Categories";
import HomePage from "../src/views/HomePage/HomePage";
import FromProvider from "./views/FromProvider/FromProvider";
import HowDoesItWork from "../src/components/HowDoesItWork/HowDoesItWork";
import Footer from "./components/Footer/Footer";
import DetailSupplier from "./views/DetailsSupplier/DetailsSupplier";
import UserLogin from "./views/UserLogin/UserLogin";
import ResetPassword from './components/ResetPassword/ResetPassword'
import UserRegister from "./views/UserRegister/UserRegister.jsx";
import FormCliente from "./views/FormCliente/FormCliente.jsx";
import DashboardAdmin from "./views/DashboardAdmin/DashboardAdmin";
import DashboardSuppliers from "./views/DashboardSuppliers/Home/Home";
import DashboardClient from "./views/DashboardClient/DashboardClient/DashboardClient.jsx";
import FeedbackForm from "./components/Feedback/FormFeedback.jsx";
import LoggedNavbar from "./components/LoggedNavbar/LoggedNavbar.jsx";
import Navbar from "./components/navBar/Navbar";
import DashboardClientEditForm from "./views/DashboardClient/DashboarClientEditForm/DashboardClientEditForm";
import DashboardClientFav from "./views/DashboardClient/DashboardClientFav/DashboardClientFav";
import DashboardClientTopPro from "./views/DashboardClient/DashboardClientTopPro/DashboardClientTopPro";
import DashboardClientCategories from "./views/DashboardClient/DashboardClientCategories/DashboardClientCategories";
import DashboardClientFeedbackForm from "./views/DashboardClient/DashboardClientFeedbackForm/DashboardClientFeedbackForm";
import DashboardClientHelp from "./views/DashboardClient/DashboardClientHelp/DashboardClientHelp";
import FormServicio from "../src/views/FormServicio/FormServicio";
import PasarelaPagos from "./views/PasarelaPagos/PasarelaPagos";
import PostsSuppliers from "./views/DashboardSuppliers/PostSuppliers/PostsSuppliers";
import CustomChatBot from "./components/CustomChatBot/CustomChatBot";
import Sidebar from "./views/DashboardSuppliers/Sidebar/Sidebar";

function App() {
  const setSessionState = useSessionState((state) => state.setSessionState);
  const session = useSessionState((state) => state.session);
  const location = useLocation();

  useEffect(() => {
    const userSession = window.localStorage.getItem("userSession");
    if (userSession) {
      const user = JSON.parse(userSession);
      setSessionState(user);
    }
  }, []);
  const isHomePage = location.pathname === "/";
  return (
    <div>
      {session.status ? <LoggedNavbar /> : <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/feedback" element={<FeedbackForm />} />
         <Route path="/updateprofile" element={<FormUpdate />} /> 
        <Route path="/dashboardSuppliers" element={<DashboardSuppliers />} />
        <Route path="/dashboardClient" element={<DashboardClient />} />
        <Route
          path="/dashboardClient/editForm"
          element={<DashboardClientEditForm />}
        />
        <Route
          path="/dashboardClient/favorites"
          element={<DashboardClientFav />}
        />
        <Route
          path="/dashboardClient/recomended"
          element={<DashboardClientTopPro />}
        />
        <Route
          path="/dashboardClient/categories"
          element={<DashboardClientCategories />}
        />
        <Route
          path="/dashboardClient/feedbackform"
          element={<DashboardClientFeedbackForm />}
        />
        <Route path="/dashboardClient/help" element={<DashboardClientHelp />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/comofunciona" element={<HowDoesItWork />} />
        <Route path="/registerProvider" element={<FromProvider />} />
        <Route path="/registerCliente" element={<FormCliente />} />
        <Route path="/createPost" element={<FormServicio />} />
        <Route path="/detail/:id" element={<DetailSupplier />} />
        <Route path="/userLogin" element={<UserLogin />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/userRegister" element={<UserRegister />} />
        <Route path="/dashboardAdmin/manageClient" element={<DashboardAdmin />} />
        <Route path="/dashboardAdmin/manageProfesional" element={<DashboardAdmin />} />
        <Route path="/pasarela" element={<PasarelaPagos />} />
        <Route path="/viewPosts" element={<PostsSuppliers />} />
        <Route path="/help" element={<CustomChatBot />} />
        <Route path="/sidebar" element={<Sidebar />} />



      </Routes>
      {!isHomePage && <Footer />}
    </div>
  );
}

export default App;
