import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";
import Navbar from "./components/navBar/Navbar";
import UserLogin from "./views/UserLogin/UserLogin";
import UserRegister from "./views/UserRegister/UserRegister.jsx";
import Footer from "./components/Footer/Footer";
import AuthPage from "./views/FormRegistro/formRegister";
import FormPiloto from "./views/FromPiloto/FromPiloto";
import DashboardClient from "./views/DashboardClient/DashboardClient/DashboardClient"
import DashboardPiloto from "./views/DashboardPiloto/DataPiloto/DataPiloto"
import {useSelector} from "react-redux"
import LoggedNavbar from './components/LoggedNavbar/LoggedNavbar'
import DashboardClientEditForm from "./views/DashboardClient/DashboarClientEditForm/DashboardClientEditForm";
//import DashboardClientFav from "./views/DashboardClient/DashboardClientFav/DashboardClientFav";
import DashboardClientTopPro from "./views/DashboardClient/DashboardClientTopPro/DashboardClientTopPro";
import DashboardClientCategories from "./views/DashboardClient/DashboardClientCategories/DashboardClientCategories";
import DashboardClientFeedbackForm from "./views/DashboardClient/DashboardClientFeedbackForm/DashboardClientFeedbackForm";
import DashboardClientHelp from "./views/DashboardClient/DashboardClientHelp/DashboardClientHelp";
import FormServicio from "../src/views/FormServicio/FormServicio";
import PasarelaPagos from "./views/PasarelaPagos/PasarelaPagos";
import PostsSuppliers from "./views/DashboardPiloto/PostSuppliers/PostsSuppliers";
import CustomChatBot from "./components/CustomChatBot/CustomChatBot";
import Sidebar from "./views/DashboardPiloto/Sidebar/Sidebar";
import Categories from "./views/Categories/Categories";
import HowDoesItWork from "./components/HowDoesItWork/HowDoesItWork";
import FormCliente from "./views/FormCliente/FormCliente";
import DetailPiloto from './views/DetailsPiloto/DetailPiloto'
import ResetPassword from './components/ModalForgotPassword/ModalForgotPassword'
import DashboardAdmin from './views/DashboardAdmin/DashboardAdmin'


function App() {
  const setSessionState = useSelector((state) => state.session);
  const session = useSelector((state) => state.session);
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
      {session.success ? <LoggedNavbar /> : <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/piloto" element={<FormPiloto />} />
        <Route path="/userLogin" element={<UserLogin />} />
        <Route path="/userRegister" element={<UserRegister />} />
        <Route path="/dashboardPiloto" element={<DashboardPiloto />} />
        <Route path="/dashboardClient" element={<DashboardClient />} />
        <Route
          path="/dashboardClient/editForm"
          element={<DashboardClientEditForm />}
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
        <Route path="/registerCliente" element={<FormCliente />} />
        <Route path="/createPost" element={<FormServicio />} />
        <Route path="/detail/:id" element={<DetailPiloto />} />
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
