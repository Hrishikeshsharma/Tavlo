import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./SignUp.css"; // Ensure this is the CSS file with updated styles

function LoginFormat({ url, logintype, to, next }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(url, form);
      console.log(res.data.user);
      setUser(res.data.user);
      if (res.status === 200) {
        navigate(next);
      }
      setMessage(res.data.message);
      setForm({ email: "", password: "" });
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="backgroundsignlog">
      <div className="tavlotext">
        <h2 className="heading">
          <img
            src="/imagesforapp/tavlo.jpg"
            alt="tavlo icon"
            className="tavlo"
          ></img>
          {logintype}
        </h2>
      </div>
      <form onSubmit={handleLogin} className="form">
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          name="email"
          id="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="inputfields"
        />

        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          name="password"
          id="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="inputfields"
        />

        <p className="already">
          Don&apos;t have an account? <a href={`${to}`}>Register now</a>
        </p>

        <button type="submit" className="button">
          Login
        </button>
      </form>
      {message && (
        <p
          className={
            message === "Incorrect password"
              ? "alert alert-danger"
              : "alert alert-success"
          }
        >
          {message}
        </p>
      )}
    </div>
  );
}

export default LoginFormat;
