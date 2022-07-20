import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { privateRoutes, publicRoutes } from "../router";

export const AppRouter = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);

  const redirectRoute = (paramPath: string) => (
    <Route path="*" element={<Navigate to={paramPath} replace />} />
  );

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
      {redirectRoute("/")}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
      {redirectRoute("/login")}
    </Routes>
  );
};
