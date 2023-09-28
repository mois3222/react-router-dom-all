import { Route, Routes } from "react-router-dom";
import { Props } from "./models";

function RoutesWithNotFound({ children }: Props) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<div>Not Found!</div>} />
    </Routes>
  );
}
export default RoutesWithNotFound;
