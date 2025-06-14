import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState(""); // State to store error messages
  const [loading, setLoading] = useState(false); // Loading state to show loading indicator

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading when form is submitted
    setError(""); // Reset error message before submitting

    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", formData);
      alert("User registered successfully!");
      setLoading(false); // Stop loading after successful registration
      // Optionally, you can redirect the user or clear the form fields here.
    } catch (err) {
      setLoading(false); // Stop loading if there is an error
      if (err.response) {
        // If the server responds with an error, show the error message
        setError(err.response.data.message || "An error occurred during registration.");
      } else {
        // If there is a network error or no response from the server
        setError("Network error, please try again later.");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {error && <div className="text-red-500 mb-4">{error}</div>} {/* Display error message */}
        
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={formData.username}
          className="border p-2"
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleChange}
          value={formData.email}
          className="border p-2"
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
          value={formData.password}
          className="border p-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2"
          disabled={loading} // Disable button while loading
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
