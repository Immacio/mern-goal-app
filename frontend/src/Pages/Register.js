import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="m-auto max-w-4xl">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-2 items-center text-5xl">
            <FaUser />
            <h1 className="font-bold">Register</h1>
          </div>
          <div className="text-2xl font-semibold text-gray-400">
            <h3>Create an account to get started</h3>
          </div>
        </div>
      </section>

      <section className="m-auto max-w-md mt-10">
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={onSubmit}
        >
          <div className="w-full">
            <input
              className="w-full border-2 rounded-md p-3 focus:outline-none"
              type="text"
              name="name"
              value={name}
              placeholder="Full Name"
              onChange={onChange}
            />
          </div>
          <div className="w-full mt-5">
            <input
              className="w-full border-2 rounded-md p-3 focus:outline-none"
              type="password"
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
          <div className="w-full mt-5">
            <input
              className="w-full border-2 rounded-md p-3 focus:outline-none"
              type="password"
              name="password2"
              value={password2}
              placeholder="Confirm Password"
              onChange={onChange}
            />
          </div>
          <div className="w-full mt-8 flex justify-center">
            <button
              type="submit"
              className="w-full font-bold text-md rounded-lg border px-10 py-2 bg-black text-white hover:bg-gray-800 transition ease-out hover:scale-105"
            >
              Register Now
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
