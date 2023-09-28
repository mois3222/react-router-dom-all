import { PrivateRoutes } from "@/models";
import { Navigate, Route } from "react-router-dom";
import { Home } from "..";
import { Dashboard } from "./dashboard";
import { RoutesWithNotFound } from "@/utilities";

function Private() {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />
    </RoutesWithNotFound>
  );
}
export default Private;
