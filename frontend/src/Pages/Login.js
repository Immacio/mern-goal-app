import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
import "../index.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = { email, password };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="m-auto max-w-4xl">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-2 items-center text-5xl">
            <FaSignInAlt />
            <h1 className="font-bold">Login</h1>
          </div>
          <div className="text-2xl font-semibold text-gray-400">
            <h3>Login and set your goals!</h3>
          </div>
        </div>
      </section>

      <section className="m-auto max-w-md mt-10">
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={onSubmit}
        >
          <div className="w-full mt-5">
            <input
              className="w-full border-2 rounded-md p-3 focus:outline-none"
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={onChange}
            />
          </div>
          <div className="w-full mt-5">
            <input
              className="w-full border-2 rounded-md p-3 focus:outline-none"
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={onChange}
            />
          </div>
          <div className="w-full mt-8 flex justify-center">
            <button
              type="submit"
              className="w-full font-bold text-md rounded-lg border px-10 py-2 bg-black text-white hover:bg-gray-800 transition ease-out hover:scale-105"
            >
              Login
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
