import { Suspense } from "react";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { AuthGuard } from "./guards";
import { PrivateRoutes, PublicRoutes } from "./models";
import { RoutesWithNotFound } from "./utilities";

import { lazy } from "react";

const Login = lazy(() => import("./pages/login/Login.page"));
const Private = lazy(() => import("./pages/private/Private.page"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<>Cargando</>}>
        <BrowserRouter>
          <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
            {/* Route Not Found */}
            {/* Login */}
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route element={<AuthGuard />}>
              <Route
                path={`${PrivateRoutes.PRIVATE}/*`}
                element={<Private />}
              />
            </Route>
            {/* Route Dashboard */}
          </RoutesWithNotFound>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
