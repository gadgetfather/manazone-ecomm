import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/auth-context";

export function ProtectedRoute() {
  const {
    authInfo: { user },
  } = useAuth();
  console.log("from protected", user);
  return Object.keys(user).length !== 0 ? <Outlet /> : <Navigate to="/login" />;
}
