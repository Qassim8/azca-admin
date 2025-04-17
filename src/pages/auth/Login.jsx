import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const nav = useNavigate();

  const checkUser = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        data
      );
      if (response.status === 200) {
        setInvalid(false);
        nav("/dashboard");
        localStorage.setItem("userToken", (await response).data.token)
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setInvalid(true);
      }
      console.log(err)
    }
  };

  const submitValues = (e) => {
    e.preventDefault();
    checkUser({ email, password });
  };
  return (
    <div className="max-w-xl mx-auto py-10 px-8 h-100 mt-20 bg-white rounded shadow-xl">
      <h1 className="pb-10 text-center text-2xl font-bold">Login</h1>
      <form action="" onSubmit={submitValues}>
        <div className="mb-6">
          {invalid && <p className="text-red-500">invalid email or password</p>}
          <label htmlFor="name" className="block text-gray-800 font-bold">
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="name"
            placeholder="username"
            className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-800 font-bold">
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            placeholder="***************"
            className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
          />
        </div>
        <button className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login