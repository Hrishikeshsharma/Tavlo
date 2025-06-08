import React, { useState, useEffect } from "react";
import axios from "../axiosInstance";
import "./SignUp.css";

function SignupFormat({ url, signuptype, to }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [pasmes, setPasmes] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (form.confirmPassword !== form.password) {
      setPasmes("Passwords do not match");
      setIsDisabled(true);
    } else if (form.password && form.confirmPassword) {
      setPasmes("Passwords match");
      setIsDisabled(false);
    } else {
      setPasmes("");
      setIsDisabled(true);
    }
  }, [form.password, form.confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(url, form);
      setMessage(res.data.message);
      setForm({ name: "", email: "", password: "", confirmPassword: "" });
    } catch (err) {
      setMessage(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="backgroundsignlog">
      <div className="headbox">
        <h2 className="heading">
          <img src="/imagesforapp/tavlo.jpg" className="tavlo"></img>
          {signuptype}
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name" className="label">
          Name
        </label>
        <input
          name="name"
          id="name"
          className="inputfields"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          name="email"
          id="email"
          type="email"
          className="inputfields"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          name="password"
          id="password"
          type="password"
          className="inputfields"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="confirmPassword" className="label">
          Re-enter Password
        </label>
        <input
          name="confirmPassword"
          id="confirmPassword"
          type="password"
          className="inputfields"
          placeholder="Re-enter Password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />

        {pasmes && (
          <p style={{ color: pasmes.includes("match") ? "green" : "red" }}>
            {pasmes}
          </p>
        )}

        <p className="already">
          Already registered? <a href={`${to}`}>Log in</a>
        </p>

        <button type="submit" className="button" disabled={isDisabled}>
          Sign Up
        </button>
      </form>
      {message && (
        <p
          className={
            message === "Email already registered"
              ? "alert alert-warning"
              : "alert alert-success"
          }
        >
          {message}
        </p>
      )}
    </div>
  );
}

export default SignupFormat;
