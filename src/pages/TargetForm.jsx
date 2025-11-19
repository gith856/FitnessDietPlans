import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const TargetForm = () => {
  const location = useLocation();
  const bodyType = new URLSearchParams(location.search).get("bodyType");
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    currentWeight: "",
    targetWeight: "",
    calory: "",
    food: "veg",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const prompt = `
Generate 7-day plan...
      `;

      const res = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" +
          import.meta.env.VITE_GEMINI_API_KEY,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
        }
      );

      const data = await res.json();
      const textContent =
        data?.candidates?.[0]?.content?.parts?.[0]?.text || "{}";

      const cleanText = textContent
        .replace(/```json|```/g, "")
        .replace(/[\u0000-\u001F]+/g, "")
        .trim();

      const plan = JSON.parse(cleanText);

      navigate("/weekly-plan", { state: { plan, form, bodyType } });
    } catch (err) {
      console.error("Error", err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <img
          src="https://darkiemindyou.wordpress.com/wp-content/uploads/2015/04/loading6_230x230-cooler.gif"
          className="w-20"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-600  to-gray-700 px-6 py-10">

      {/* ================= HERO SECTION ================= */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-14"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">
          Build Your Personalized Fitness Plan
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-lg leading-relaxed">
          Based on your selected body type –{" "}
          <span className="text-yellow-400 font-semibold">{bodyType}</span>,
          we will generate a completely tailored <br />
          workout & nutrition plan that matches your transformation goals.
        </p>
      </motion.div>

      {/* ================= MAIN FLEX LAYOUT ================= */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* ============ Left Side Illustration + Text ============ */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-white"
        >
          <img
            src="https://blogs.fitpage.in/wp-content/uploads/2021/10/Article_1.jpg"
            className="rounded-2xl shadow-xl mb-6"
            alt="Fitness"
          />

          <h2 className="text-3xl font-bold mb-3">
            Your Goals. Your Body. Your Plan.
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            Every body is different — and so should your fitness plan. Provide
            your details and we’ll create a powerful, science-backed routine
            designed to:
          </p>

          <ul className="text-gray-300 space-y-2 text-lg">
            <li>🔥 Burn fat efficiently</li>
            <li>💪 Build lean or bulky muscle</li>
            <li>⚡ Improve stamina & strength</li>
            <li>🥗 Follow a clean, optimized nutrition plan</li>
          </ul>
        </motion.div>

        {/* ============ Form Card ============ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white shadow-2xl rounded-2xl p-8"
        >
          <h1 className="text-3xl text-gray-900 font-bold mb-6 text-center">
            Enter Your Details
          </h1>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div>
              <label className="text-gray-600 font-semibold">Current Weight (kg)</label>
              <input
                type="number"
                name="currentWeight"
                value={form.currentWeight}
                onChange={handleChange}
                className="px-4 py-2 w-full rounded-xl border mt-1 outline-none focus:ring focus:ring-yellow-300"
                required
              />
            </div>

            <div>
              <label className="text-gray-600 font-semibold">Target Weight (kg)</label>
              <input
                type="number"
                name="targetWeight"
                value={form.targetWeight}
                onChange={handleChange}
                className="px-4 py-2 w-full rounded-xl border mt-1 outline-none focus:ring focus:ring-yellow-300"
                required
              />
            </div>

            <div>
              <label className="text-gray-600 font-semibold">Calories Per Day</label>
              <input
                type="number"
                name="calory"
                value={form.calory}
                onChange={handleChange}
                className="px-4 py-2 w-full rounded-xl border mt-1 outline-none focus:ring focus:ring-yellow-300"
                required
              />
            </div>

            <div>
              <label className="text-gray-600 font-semibold">Diet Type</label>
              <select
                name="food"
                value={form.food}
                onChange={handleChange}
                className="px-4 py-2 w-full rounded-xl border mt-1 outline-none focus:ring focus:ring-yellow-300"
              >
                <option value="veg">Veg</option>
                <option value="non-veg">Non-Veg</option>
              </select>
            </div>

            <button
              type="submit"
              className="px-4 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-xl shadow-xl transition-all mt-4"
            >
              Generate My 7-Day Diet Plan
            </button>
          </form>
        </motion.div>
      </div>

      {/* ================= BOTTOM INFO ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto mt-16 text-center text-gray-300"
      >
        <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
          Why We Need Your Details?
        </h3>
        <p className="text-lg leading-relaxed">
          The more accurate your input, the more personalized your workout &
          nutrition plan becomes.  
          Whether your goal is fat loss, muscle gain, shredded aesthetics,
          athletic performance, or pure strength —  
          **your transformation starts with clarity.**
        </p>
      </motion.div>
    </div>
  );
};

export default TargetForm;
