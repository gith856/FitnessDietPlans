import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Dashboard = () => {
  const navigate = useNavigate();

  const bodyType = [
    {
      name: "Lean Physique",
      image:
        "https://www.quizexpo.com/wp-content/uploads/2020/10/q3-3.jpg",
      desc: "A toned body with visible definition, low body fat, and excellent endurance.",
      benefits: ["Lightweight", "Better stamina", "Agile & flexible"],
    },
    {
      name: "Bulky Body",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.oP5tOKJR_kojARv4nUU26wHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
      desc: "Designed for muscle mass gain, strength, and increased body size.",
      benefits: ["Mass gain", "Strength boost", "High calorie diet"],
    },
    {
      name: "Fit Body",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.YLspOD3ePI6qoeAleyWG_gHaGK?w=900&h=749&rs=1&pid=ImgDetMain&o=7&rm=3",
      desc: "Balanced, healthy body with good strength, stamina & low fat.",
      benefits: ["Balanced physique", "Healthy lifestyle", "Beginner-friendly"],
    },
    {
      name: "Athlete",
      image:
        "https://th.bing.com/th/id/OIP.q6tXGCR8F2mdvhAxvD3LVgHaLz?w=115&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      desc: "For sports conditioning, agility, fast movements, and endurance.",
      benefits: ["High endurance", "Agility training", "Explosive power"],
    },
    {
      name: "Shredded",
      image:
        "https://th.bing.com/th/id/OIP.JEcC1d0fZg78CLWyMA568QHaE8?w=266&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      desc: "Extremely low fat, razor-sharp muscle definition, a true aesthetic body.",
      benefits: ["Visible abs", "Low body fat", "Aesthetic-focused"],
    },
    {
      name: "Power Body",
      image:
        "https://www.sixpackabs.eu/wp-content/uploads/2023/11/young-bodybuilder-in-denim-jeans-1024x683.jpg",
      desc: "A physique built for strength sports like powerlifting & strongman.",
      benefits: ["Heavy lifting", "Strength focus", "High protein diet"],
    },
  ];

  const handleSelect = (type) => {
    navigate(`/target-setup?bodyType=${type}`);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900  to-gray-900 p-6">

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-4">
          Your Fitness Journey Starts Here
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Select your ideal body type to begin your personalized workout & nutrition plan.
          This helps us understand your goals and design a routine that brings the 
          transformation you're aiming for.
        </p>
      </motion.div>

      {/* GRID CARDS */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {bodyType.map((item) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 bg-opacity-60 backdrop-blur-xl rounded-2xl 
                       p-6 shadow-2xl border border-gray-700 hover:border-indigo-500
                       hover:shadow-indigo-500/40 transition-all cursor-pointer"
            onClick={() => handleSelect(item.name)}
          >
            <img
              src={item.image}
              className="h-48 w-48 mx-auto rounded-xl object-cover shadow-lg mb-4"
              alt={item.name}
            />

            <h2 className="text-2xl text-white font-bold mt-2 text-center">
              {item.name}
            </h2>

            <p className="text-gray-300 text-sm text-center mt-2 mb-4 leading-relaxed">
              {item.desc}
            </p>

            {/* BENEFITS LIST */}
            <ul className="text-gray-200 text-sm mt-2 space-y-1">
              {item.benefits.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span className="text-indigo-400">✔</span>
                  {b}
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleSelect(item.name)}
              className="mt-5 bg-indigo-600 hover:bg-indigo-700 text-white w-full 
                         py-2 rounded-xl font-semibold transition-all"
            >
              Select Body Type
            </button>
          </motion.div>
        ))}
      </div>

      {/* OPINION SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-5xl mx-auto mt-20 bg-gray-800 bg-opacity-50 p-10 rounded-3xl shadow-xl"
      >
        <h2 className="text-3xl font-bold text-indigo-400 mb-4">Coach’s Personal Opinion</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Your body type goal should be based on your lifestyle, dedication level, and long-term 
          vision—not trends.  
          <br /><br />
          • If you're starting fresh → <span className="text-white font-semibold">Fit or Lean</span>  
          <br />
          • Want a superhero body? → <span className="text-white font-semibold">Shredded</span>  
          <br />
          • Want strength? → <span className="text-white font-semibold">Power or Bulky</span>  
          <br /><br />
          No body type is “best”. The best one is the one **you can maintain proudly**.
          I’ll guide you with diet, workout, routine, motivation & tracking.  
          Your transformation begins now.
        </p>
      </motion.div>
    </div>
  );
};

export default Dashboard;
