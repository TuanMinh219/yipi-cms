import React from "react";
import useAuth from "@/features/Auth/useAuth";
import AdminLayout from "./AdminLayout";
import UserLayout from "./UserLayout";

export default function LayoutSwitch() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <AdminLayout /> : <UserLayout />;
}
