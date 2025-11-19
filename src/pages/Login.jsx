import React, { useState } from "react";
import { Mail, Lock, Loader2, Chrome } from "lucide-react";
import { motion } from "framer-motion";
import { auth, googleProvider, db } from "../firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      alert("Login successful ✅");
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);

      if (!snap.exists()) {
        await setDoc(ref, {
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          createdAt: serverTimestamp(),
        });
      }

      alert("Google Sign-in successful 🚀");
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-yellow-100 via-white to-yellow-200 overflow-hidden">

      {/* Floating circles */}
      <div className="absolute top-10 left-10 bg-yellow-300 opacity-40 w-32 h-32 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 bg-yellow-500 opacity-30 w-40 h-40 rounded-full blur-2xl"></div>

      {/* Glass card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="backdrop-blur-xl bg-white/30 shadow-2xl border border-white/30 rounded-3xl p-10 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800 tracking-wide">
          Welcome Back 👋
        </h2>

        {/* ⭐ Fitness Motivational Content Added Here ⭐ */}
        <p className="text-center text-gray-700 text-sm mb-6 leading-relaxed">
          Your fitness journey starts with consistency—not perfection.  
          Eat clean, train smart, stay hydrated, and sleep enough.  
          Login now and continue building a stronger, healthier version of yourself 💪🔥
        </p>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="flex items-center bg-white/60 backdrop-blur-md border border-gray-200 rounded-xl px-3 py-2 shadow-sm">
              <Mail size={18} className="text-gray-500" />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-2 py-2 bg-transparent outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="flex items-center bg-white/60 backdrop-blur-md border border-gray-200 rounded-xl px-3 py-2 shadow-sm">
              <Lock size={18} className="text-gray-500" />
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-2 py-2 bg-transparent outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            disabled={loading}
            className="mt-3 w-full bg-yellow-500 text-gray-900 font-semibold py-3 rounded-xl shadow-lg hover:bg-yellow-400 transition"
          >
            {loading ? <Loader2 className="animate-spin mx-auto" /> : <>Login</>}
          </motion.button>

          {/* Google Login */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="mt-2 w-full flex justify-center items-center gap-2 border border-gray-300 py-3 rounded-xl bg-white/60 backdrop-blur-md hover:bg-white transition font-medium text-gray-700 shadow-sm"
          >
            <Chrome className="text-yellow-600" size={18} /> Sign in with Google
          </button>

          {/* Signup Link */}
          <p className="text-center text-sm text-gray-700 mt-4">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-yellow-700 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
