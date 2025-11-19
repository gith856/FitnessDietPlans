import { ArrowRight, Bot, Brain, Dumbbell, Flame, HeartPulse, Salad, User } from "lucide-react";
import React from "react";
import { Link } from 'react-router-dom'

const Home = () => {

  const cards = [
  {
    title: "Create a Sustainable Calorie Deficit",
    desc: "Weight loss becomes easier when you maintain a small but consistent calorie deficit. Our smart tracker monitors your meals, calories and metabolism level.",
    icon: "🔥",
    extra: [
      "Auto detects overeating patterns",
      "Daily custom calorie target",
      "Healthy alternative food suggestions",
    ]
  },
  {
    title: "Boost Metabolism Naturally",
    desc: "Improve internal fat-burning mechanisms with mindful eating, strength training, hydration schedule and sleep regulation.",
    icon: "⚡",
    extra: [
      "Morning metabolism boosters",
      "Low-impact fat-burning exercises",
      "Sleep–stress balance tracker",
    ]
  },
  {
    title: "Follow a Structured Meal Strategy",
    desc: "Your body responds better when your meals follow proper timings, portion control and nutrient distribution.",
    icon: "🥗",
    extra: [
      "AI portion size suggestions",
      "Meal-timing habit tracker",
      "Balanced protein–carb-fat plan",
    ]
  },
  {
    title: "Daily Mindset & Motivation System",
    desc: "Most weight loss journeys fail due to lack of motivation. Our behavioural engine provides affirmations, reminders and motivational nudges.",
    icon: "💡",
    extra: [
      "Daily motivation messages",
      "Goal-tracking dashboard",
      "Weekly progress analytics"
    ]
  },
];



  return (
    <div className="bg-yellow-50 text-gray-800 ">
      <section className="realtive bg-[url('https://www.shutterstock.com/image-photo/chalk-hand-drawn-brain-picture-260nw-1896956989.jpg')] bg-cover bg-center  text-white ">
        <div className="absolute inset-0"></div>

        <div className="relative z-20 mx-auto text-start max-w-7xl px-9 py-32 bg-scroll">
          <h1 className="text-5xl font-bold mb-6">LET'S GET FIT TOGETHER</h1>
          <p className="text-2xl text-gray-100 font-semibold max-w-2xl ">
            Your digital fitness partner, calory tracker and dietician, We do
            all for you.{" "}
          </p>

          <div className="flex gap-6  mt-6">
            <button className="bg-yellow-500 rounded-lg shadow-md px-4 py-2 hover:bg-yellow-600 transition-all duration-300">
              Start Plan
            </button>

            <button className="border-2 bg-gray-50/20 rounded-lg shadow-md px-4 py-2 hover:bg-yellow-500 transition-all duration-300">
              <Link to="/login">AI Consult</Link>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 text-center">
        <h2 className="text-4xl font-bold text-gray-700 mb-6">
          Smart Fitness Tools
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-6 font-semibold text-gray-500">
          Powerful tools designed to transform your lifestyle with smart tracking,
          personalised recommendations, goal-based monitoring and AI guidance.
        </p>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mb-6 mx-auto px-6 ">
          <div className=" p-6 rounded-2xl shadow-md">
            <div className="p-6 bg-green-100 inline-flex rounded-full shadow-md mb-6">
              <Salad className="text-green-600 w-10 h-10" />
            </div>
            <h2 className="text-green-600 text-2xl font-semibold mb-2">Ingredient Generator</h2>
            <p className="text-md text-gray-700">
              Instantly generate healthy meal ideas based on your nutrition goals,
              existing kitchen ingredients, allergies and food preferences.
            </p>
            <ul className="text-sm text-gray-600 mt-3 space-y-1">
              <li>✓ Helps remove confusion about what to cook</li>
              <li>✓ Ensures balanced carb–protein–fat ratio</li>
              <li>✓ Provides alternative ingredient suggestions</li>
            </ul>
          </div>

          <div className=" p-6 rounded-2xl shadow-md">
            <div className="p-6 bg-red-100 inline-flex rounded-full shadow-md mb-6">
              <HeartPulse className="text-red-600 w-10 h-10" />
            </div>
            <h2 className="text-red-600 text-2xl font-semibold mb-2">Nutrition Level</h2>
            <p className="text-md text-gray-700">
              Get real-time nutritional breakdown of foods such as calories,
              protein, vitamins, fibre and sugar levels.
            </p>

            <ul className="text-sm text-gray-600 mt-3 space-y-1">
              <li>✓ Helps identify unhealthy food choices</li>
              <li>✓ Tracks daily macro & micro nutrients</li>
              <li>✓ Recommends nutrient-rich alternatives</li>
            </ul>
          </div>

          <div className=" p-6 rounded-2xl shadow-md">
            <div className="p-6 bg-blue-100 inline-flex rounded-full shadow-md mb-6">
              <Bot className="text-blue-600 w-10 h-10" />
            </div>
            <h2 className="text-blue-600 text-2xl font-semibold mb-2">AI Diet Guide</h2>
            <p className="text-md text-gray-700">
              Personalised diet planning based on your body type, BMI, weight
              history, goal duration and lifestyle.
            </p>

            <ul className="text-sm text-gray-600 mt-3 space-y-1">
              <li>✓ Suggests daily meals & hydration targets</li>
              <li>✓ Adjusts plan automatically if you miss meals</li>
              <li>✓ Works for veg, non-veg, keto & diabetic needs</li>
            </ul>
          </div>
          <div className=" p-6 rounded-2xl shadow-md">
            <div className="p-6 bg-orange-100 inline-flex rounded-full shadow-md mb-6">
              <Dumbbell className="text-orange-600 w-10 h-10" />
            </div>
            <h2 className="text-orange-600 text-2xl font-semibold mb-2">Exercise Planning</h2>
            <p className="text-md text-gray-700">
              Smartly build your workout routine, weekly exercise flow and
              fat-burning activity chart.
            </p>

            <ul className="text-sm text-gray-600 mt-3 space-y-1">
              <li>✓ Custom workout levels: beginner to athlete</li>
              <li>✓ Daily calorie-burn estimation</li>
              <li>✓ Step count & home workout suggestions</li>
            </ul>
          </div>
        </div>
      </section>


      <div>

        {/* ================= FOUR CARDS ================= */}
        {/* <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6 mt-14">
        <div className="bg-white rounded-3xl shadow-md p-6 text-center">
          <div className="text-green-500 text-4xl mb-3">⚙️</div>
          <h3 className="font-bold text-lg">Health Strategy</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Tertiats et quasi architecto perspiciatis.
          </p>
        </div>
        <div className="bg-white rounded-3xl shadow-md p-6 text-center">
          <div className="text-green-500 text-4xl mb-3">🥗</div>
          <h3 className="font-bold text-lg">Nutritional Levels</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Nam laoreet arcu idac suscipit rhoncus.
          </p>
        </div>
        <div className="bg-white rounded-3xl shadow-md p-6 text-center">
          <div className="text-green-500 text-4xl mb-3">🍏</div>
          <h3 className="font-bold text-lg">Healthy Diet</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Proin id commodo nisl fusce sollicitudin.
          </p>
        </div>
        <div className="bg-white rounded-3xl shadow-md p-6 text-center">
          <div className="text-green-500 text-4xl mb-3">🏋️</div>
          <h3 className="font-bold text-lg">Exercise Planning</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Maecenas porttitor diam in dui interdum.
          </p>
        </div>

      </div> */}

        {/* ================= ABOUT SECTION ================= */}
        <section className="bg-[#e8f7e9] py-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

            {/* Left Image + Label */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/11038357/pexels-photo-11038357.jpeg"
                alt="fitness"
                className="rounded-2xl w-full object-cover"
              />

              <div className="absolute -bottom-6 left-6 bg-green-600 text-white px-6 py-4 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sm">Years Of Experience</p>
              </div>
            </div>

            {/* Right Text */}
            <div>
              <p className="text-orange-500 font-bold text-sm tracking-widest">
                ABOUT US
              </p>

              <h2 className="text-4xl font-bold text-gray-800 mt-2 leading-tight">
                We Provide Best Weight Loss <br /> Support In Town
              </h2>

              <p className="text-gray-600 mt-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
              </p>

              <div className="mt-6 space-y-5">

                {/* Item 1 */}
                <div className="flex items-start gap-4">
                  <div className="bg-orange-400 h-6 w-6 rounded-md flex items-center justify-center text-white text-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Weight Loss Daily Service
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-4">
                  <div className="bg-green-500 h-6 w-6 rounded-md flex items-center justify-center text-white text-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Every Week Schedule Programme
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Curabitur vitae metus luctus, mollis magna eu, accumsan tortor.
                    </p>
                  </div>
                </div>

              </div>

              <button className="mt-8 bg-orange-400 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-red-500 transition">
                <Link to="about">Learn More</Link>
              </button>
            </div>
          </div>
        </section>
      </div>


      <section className="py-20 bg-gray-50">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            How To Solve Weight Loss Problems
          </h2>
          <p className="text-gray-500 mt-2">
            Tertiatis et quasi architecto. Sed ut perspiciatis unde.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-md p-6 flex gap-4 relative overflow-hidden"
            >
              {/* Green Icon Box */}
              <div className="bg-green-600 text-white h-14 w-14 flex items-center justify-center rounded-xl text-3xl">
                {card.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="font-bold text-xl text-gray-800">
                  {card.title}
                </h3>

                <p className="text-gray-600 text-sm mt-1">{card.desc}</p>
                <p className="text-gray-600 text-sm mt-1">{card.extra}</p>


                <button className="text-red-500 font-semibold text-sm mt-3 hover:underline">
                  Read More
                </button>
              </div>

              {/* Yellow bottom line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400"></div>
            </div>
          ))}
        </div>
      </section>



      {/* ---------------- USER FLOW SECTION ---------------- */}
      <section className="bg-yellow-50 py-20 text-center">
        <h2 className="text-4xl font-bold mb-10">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          <div className="shadow-xl rounded-2xl py-8 px-8 bg-white">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-black">
              1
            </div>
            <h3 className="font-semibold text-xl mb-2">Choose Body Type</h3>
            <p className="text-gray-600">Select your body type and fitness goal to begin your journey.</p>
          </div>
          <div className="shadow-xl rounded-2xl py-8 px-8 bg-white">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-black">
              2
            </div>
            <h3 className="font-semibold text-xl mb-2">Pick Veg/Non-Veg Flow</h3>
            <p className="text-gray-600">Get diet options that suit your preferences and budget.</p>
          </div>
          <div className="shadow-xl rounded-2xl py-8 px-8 bg-white">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-black">
              3
            </div>
            <h3 className="font-semibold text-xl mb-2">Get AI Guidance</h3>
            <p className="text-gray-600">
              Ask your assistant anything — from protein intake to motivation tips.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="bg-[#e6f7e6] py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">

        <div>
          <p className="text-orange-500 font-bold tracking-wide text-sm">
            GET FREE CONSULTATION
          </p>

          <h2 className="text-4xl font-bold text-gray-800 leading-tight mt-2">
            Visit Our Studio To <br /> Understand The Difference
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Curabitur vitae elit orci. Nulla blandit lobortis dolor, eget
            faucibus massa maximus vel. Cras a venenatis erat. Aliquam interdum
            lectus eget fringilla pharetra. Nullam dictum condimentum sagittis.
          </p>

          <div className="flex items-start gap-8 mt-10">

      
            <div>
              <div className="text-3xl text-green-600 mb-2">💬</div>
              <p className="font-semibold text-gray-800">Say hello to us</p>
              <p className="text-gray-600 mt-2 text-sm">
                Info@example.com <br /> +(1888) 1234-5678
              </p>
            </div>

       
            <div className="w-px bg-gray-300 h-20"></div>

        
            <div>
              <div className="text-3xl text-green-600 mb-2">📍</div>
              <p className="font-semibold text-gray-800">Our office location</p>
              <p className="text-gray-600 mt-2 text-sm">
                121 King St, Melbourne VIC <br />
                3000, Australia
              </p>
            </div>
          </div>
        </div>

       
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <p className="text-orange-500 font-bold tracking-wide text-sm"> BECOME A PARTNER</p>
          <h3 className="text-2xl font-bold text-gray-800 mt-1 mb-6">Join Us Our Training Program</h3>

         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="border rounded-lg px-4 py-3 text-sm w-full"/>
            <input type="text" placeholder="Last Name" className="border rounded-lg px-4 py-3 text-sm w-full"/>
            <input type="text" placeholder="Phone" className="border rounded-lg px-4 py-3 text-sm w-full" />
            <input type="email"  placeholder="Your Email"  className="border rounded-lg px-4 py-3 text-sm w-full"/>
            <input type="text" placeholder="Your Height" className="border rounded-lg px-4 py-3 text-sm w-full"/>
            <input type="text" placeholder="Body Weight"  className="border rounded-lg px-4 py-3 text-sm w-full"/>
          </div>
          <input type="text" placeholder="Body Weight Target" className="border rounded-lg px-4 py-3 text-sm w-full mt-4"/>

         
          <button className="mt-6 bg-orange-400 text-white w-full md:w-auto px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
            Get Information Now
          </button>
        </div>
      </div>
    </section> */}

      {/* ---------------- CTA SECTION ---------------- */}
      <section className="bg-[#e6f7e6]  py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Start Your Fitness Journey Today</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Transform your body, one meal and one workout at a time. Your AI coach is waiting!
        </p>
        <button className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full hover:bg-yellow-300 transition flex items-center gap-2 mx-auto">
          Begin Now <ArrowRight className="w-5 h-5" />
        </button>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      {/* <footer className="bg-gray-100 py-8 text-center text-gray-600 text-sm">
        <div className="flex justify-center items-center gap-2 mb-2">
          <User className="w-4 h-4" />
          <span>Powered by SmartFit AI — Made with ❤ for every fitness enthusiast.</span>
        </div>
        © {new Date().getFullYear()} EatHealthy. All rights reserved.
      </footer> */}



    </div>


  );
};

export default Home;
