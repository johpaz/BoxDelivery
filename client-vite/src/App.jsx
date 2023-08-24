import { useEffect } from "react";
import { useSessionState } from "../services/zustand/useSession";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "../src/views/HomePage/HomePage";
import './App.css'

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
       </Routes>
      {!isHomePage && <Footer />}
    </div>
  );
}

export default App;
