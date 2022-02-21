import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="flex justify-between mt-5 mb-10 px-5 items-center border-b shadow-md pb-4">
      <div>
        <Link className="hover:opacity-40" to="/">
          <h1 className="text-2xl font-bold">GoalSetter</h1>
        </Link>
      </div>
      <div className="flex space-x-10">
        {user ? (
          <button
            className="flex items-center justify-center space-x-2 hover:opacity-60 border rounded-lg py-1 px-4 bg-black text-white"
            onClick={onLogout}
          >
            <FaSignOutAlt />
            <p className="text-lg font-semibold">Logout</p>
          </button>
        ) : (
          <>
            <Link
              className="flex items-center justify-center space-x-2 hover:opacity-60"
              to="/login"
            >
              <FaSignInAlt />
              <p className="text-lg font-semibold">Login</p>
            </Link>
            <Link
              className="flex items-center justify-center space-x-2 hover:opacity-60"
              to="/register"
            >
              <FaUser />
              <p className="text-lg font-semibold">Register</p>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
