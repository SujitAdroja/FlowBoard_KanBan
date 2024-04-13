import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function PublicOnlyRoute({ Component }) {
  const login = useSelector((state) => state.login.value);
  useEffect(() => {}, [login]);

  return login ? <Navigate to={"/boards"} replace /> : <Component />;
}

export default PublicOnlyRoute;
