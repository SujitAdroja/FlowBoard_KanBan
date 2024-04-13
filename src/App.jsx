import React, { useState } from "react";

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AauthScreen from "./screens";
import PublicOnlyRoute from "./utils/PublicOnlyRoute";
import BoardsScreen from "./screens/BoardsScreen";
import PrivateRoutes from "./utils/PrivateRoutes";
import store from "./app/store";
import { Provider } from "react-redux";
import BoardScreen from "./screens/BoardScreen";
import data from "./data";
function App() {
  const [login, setLogin] = useState(JSON.parse(localStorage.getItem("login")));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<PublicOnlyRoute Component={AauthScreen} />}
            />
            <Route
              path="/boards"
              element={<PrivateRoutes Component={BoardsScreen} />}
            />
            <Route
              path="/boards/:boardID"
              element={<PrivateRoutes Component={BoardScreen} />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
