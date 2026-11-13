import { useState } from "react";
import axios from 'axios';
import AuthNavbar from "./components/Authnavbar";


type Errors = {
  email?: string;
  password?: string;
  usertype?: string;
};

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUsertype] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: Errors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Minimum 6 characters required";
    }

    if (!usertype) {
      newErrors.usertype = "Please select user type";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validate()) return;

  try {
    setLoading(true);

  

    const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/signup`, {
      email,
      password,
      usertype,
    });

      alert(response.data.message || "Signup Successful!");

      // optional: clear form
      setEmail("");
      setPassword("");
      setUsertype("");
      setErrors({});
    } catch (error: any) {
      alert(
        error?.response?.data?.message ||
          "Signup failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

return (
  <div className="min-h-screen bg-gray-100">
    
    {/* Navbar always on top */}
    <AuthNavbar />
          
    <div className="min-h-screen flex flex-col md:flex-row">
      
      {/* Left Image Section */}
      <div className="md:w-1/2 bg-indigo-600 flex items-center justify-center p-6">
        <img
          src="/handhake.jfif"
          alt="User"
          className="w-40 md:w-96 rounded-3xl"
        />
      </div>

      {/* Right Form Section */}
      <div className="md:w-1/2 flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-center mb-6">
            Create Account
          </h2>

          {/* Email */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Email ID</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* User Type */}
          <div className="mb-6">
            <label className="block font-medium mb-1">User Type</label>
            <select
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={usertype}
              onChange={(e) => setUsertype(e.target.value)}
            >
              <option value="">Select user type</option>
              <option value="Doner">Doner</option>
              <option value="Needy">Needy</option>
             
            </select>
            {errors.usertype && (
              <p className="text-red-500 text-sm mt-1">{errors.usertype}</p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition disabled:opacity-60"
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  </div>
 );
};

export default Signup;


  
  