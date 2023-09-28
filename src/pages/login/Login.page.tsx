import { createUser } from "@/redux/slices";
import { getMorty } from "./services";
import { useDispatch, useSelector } from "react-redux";
import { loginAdapter } from "./adapters";
import { APIInfo, AppStore } from "@/models";
function Login() {
  const userState = useSelector((store: AppStore) => store.user);
  const dispatch = useDispatch();

  const login = async () => {
    try {
      const res = await getMorty();
      dispatch(createUser(loginAdapter<APIInfo>(res)));
    } catch (error) {}
  };
  return (
    <>
      <h1>
        Hello This's a loging <span>{JSON.stringify(userState.name)}</span>
      </h1>
      <button onClick={login}>Login</button>
    </>
  );
}

export default Login;
