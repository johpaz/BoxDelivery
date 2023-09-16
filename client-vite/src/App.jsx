import { useEffect } from "react";
import { Routes, Route, useLocation,Navigate } from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";
import Navbar from "./components/navBar/Navbar";
import UserLogin from "./views/UserLogin/UserLogin";
import UserRegister from "./views/UserRegister/UserRegister.jsx";
import Footer from "./components/Footer/Footer";
import FormPiloto from "./views/FromPiloto/FromPiloto";
import DashboardClient from "./views/DashboardClient/DashboardClient/DashboardClient"
import DashboardPiloto from "./views/DashboardPiloto/DataPiloto/DataPiloto"
import {useDispatch, useSelector} from "react-redux"
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
import TipoVehiculo from "./views/Categories/TipoVehiculo";
import HowDoesItWork from "./components/HowDoesItWork/HowDoesItWork";
import FormCliente from "./views/FormCliente/FormCliente";
import DetailPiloto from './views/DetailsPiloto/DetailPiloto'
import ResetPassword from './components/ModalForgotPassword/ModalForgotPassword'
import DashboardAdmin from './views/DashboardAdmin/DashboardAdmin'
import { setSessionState } from "./services/redux/slice/sessionSlice";
import ClientProtectedRoutes from './router/ClientProtectedRoutes'
import PilotoProtectedRoutes from "./router/PilotoProtectedRoutes";
import FormUpdateProfile from './components/formUpdateProfile/FormUpdateProfile'
import UpdatePost from './views/DashboardPiloto/UpdatePost/UpdatePost'
import Certificates from './views/DashboardPiloto/Certificates/Certiificates'
import Delivery from './components/DashboardClient/Delivery/Delivery'

function App() {
  const session = useSelector((state) => state.session);
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    // Recupera la sesión de localStorage al cargar la página
    const storedSession = JSON.parse(localStorage.getItem('session'));
    console.log(session);
    if (storedSession) {
      // Dispatch de la acción para actualizar el estado de Redux con la sesión almacenada
      dispatch(setSessionState(storedSession));
    }
  }, [dispatch]);

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
        <Route path="/tipoVehiculo" element={<TipoVehiculo/>} />
        <Route path="/comofunciona" element={<HowDoesItWork />} />
        <Route path="/FormClient" element={<FormCliente />} />
        <Route path="/createPost" element={<FormServicio />} />
        <Route path="/detail/:id" element={<DetailPiloto />} />
        <Route path="/userLogin" element={<UserLogin />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/userRegister" element={<UserRegister />} />
        <Route path="/sidebar" element={<Sidebar />} />
       
        <Route element={<ClientProtectedRoutes />}>
          <Route
            exact
            path="/dashboardClient"
            element={<DashboardClient />}
          />
          <Route
            exact
            path="/dashboardClient/editForm"
            element={<DashboardClientEditForm />}
          />
          <Route
            exact
            path="/dashboardClient/delivery"
            element={<Delivery/>}
          />
          <Route
            exact
            path="/dashboardClient/recomended"
            element={<DashboardClientTopPro />}
          />
          {/* <Route
            exact
            path="/dashboardClient/favorites"
            element={<DashboardClientFavorite />}
          /> */}
          <Route
            exact
            path="/dashboardClient/categories"
            element={<DashboardClientCategories />}
          />
          <Route
            exact
            path="/dashboardClient/feedbackform"
            element={<DashboardClientFeedbackForm />}
          />{" "}
          exact
          <Route
            exact
            path="/dashboardClient/help"
            element={<DashboardClientHelp />}
          />
        </Route>
        <Route
          path='*'
          element={<Navigate to='/' />}
        />

       
         {/* Dash Profesional */}
         <Route element={<PilotoProtectedRoutes />}>
          <Route
            exact
            path="/dashboardSuppliers"
            element={<DashboardPiloto/>}
          />
          <Route
            exact
            path="/dashboardSuppliers/publicaciones"
            element={<FormServicio />}
          />
          <Route
            exact
            path="dashboardSuppliers/updateprofile/:id"
            element={<FormUpdateProfile />}
          />
          <Route
            exact
            path="/dashboardSuppliers/pasarela"
            element={<PasarelaPagos />}
          />
          <Route
            exact
            path="/dashboardSuppliers/nuevas-publicaciones"
            element={<PostsSuppliers />}
          />
          <Route
            exact
            path="/dashboardSuppliers/updatepost/:id"
            element={<UpdatePost />}
          />
          <Route
            exact
            path="/dashboardSuppliers/certificados"
            element={<Certificates />}
          />
        </Route>
        </Routes>
      {!isHomePage && <Footer />}
    </div>
  );
}

export default App;
