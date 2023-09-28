import { AppStore, PublicRoutes } from "@/models";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const AutGuard = () => {
  const userState = useSelector((store: AppStore) => store.user);
  return userState.id ? (
    <Outlet />
  ) : (
    <Navigate replace to={PublicRoutes.LOGIN} />
  );
};

export default AutGuard;
