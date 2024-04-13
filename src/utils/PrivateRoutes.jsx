import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function PrivateRoutes({ Component }) {
  // const login = useSelector((state) => state.login.value);
  const login = JSON.parse(localStorage.getItem("login"));

  return !login ? <Navigate to={"/"} replace /> : <Component />;
}

export default PrivateRoutes;
