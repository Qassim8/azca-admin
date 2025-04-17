import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const role = "admin";
  const nav = useNavigate();


  const addUser = async (data) => {

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        data
      );
      if (response.status === 201) {
        setEmailError(false)
        nav("/dashboard/users")
      }
    }
    catch (err) {
      if (err.response && err.response.status === 400) {
        setEmailError(true);
      }
      console.log(err)
    }
    
  }

    const submitValues = (e) => {
      e.preventDefault();
      addUser({ username, email, password, role });
    };
  return (
    <form className="flex flex-col gap-8 mt-8" onSubmit={submitValues}>
      <div className="flex flex-col">
        <label htmlFor="title" className="font-semibold pb-1">
          Username:
        </label>
        <input
          name="title"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 md:w-1/2 rounded-sm border border-slate-300 outline-none"
        />
      </div>
      <div className="flex flex-col">
        {emailError && <p className='text-red-500'>email already exist</p>}
        <label htmlFor="title" className="font-semibold pb-1">
          Email:
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 md:w-1/2 rounded-sm border border-slate-300 outline-none"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="description" className="font-semibold pb-1">
          Password :
        </label>
        <input
          type="password"
          name="description"
          id="description"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 md:w-1/2 rounded-sm border border-slate-300 resize-none outline-none"
        ></input>
      </div>
      <button
        type="submit"
        className="py-2 px-5 md:w-1/2 text-white bg-indigo-500 rounded-sm cursor-pointer"
      >
        Add
      </button>
    </form>
  );
}

export default AddUser