import React, { useEffect } from "react";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";
import { useRouter } from "./routes";
import {BrowserRouter as Router}  from 'react-router-dom'

function App() {
  const { token, userId, login, logout } = useAuth();
  const isAuthentication = !!token
  const routes = useRouter(isAuthentication)
  return (
    <AuthContext.Provider value={{token, userId, login, logout, isAuthentication}}>
      <Router>
        {routes}
      </Router>
    </AuthContext.Provider>
  );
}

export default App;


