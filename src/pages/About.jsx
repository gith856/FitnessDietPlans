import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  // --- NEWS FEED CARDS ---
  const cards = [
    {
      img: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
      title: "Easy ways to make fitness faster",
      date: "August 13, 2022",
      author: "Joke Johnson"
    },
    {
      img: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg",
      title: "10 Reasons why fitness is common.",
      date: "August 7, 2022",
      author: "Joke Johnson"
    },
    {
      img: "https://images.pexels.com/photos/3757373/pexels-photo-3757373.jpeg",
      title: "Principles of psychology you can use",
      date: "August 11, 2022",
      author: "Joke Johnson"
    },
    {
      img: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
      title: "Easy ways to make fitness faster",
      date: "August 13, 2022",
      author: "Joke Johnson"
    },
  ];

  // --- SLIDER LOGIC ---
  const [page, setPage] = React.useState(0);
  const [showAll, setShowAll] = React.useState(false);

  const cardsPerPage = 3;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const displayedCards = showAll
    ? cards
    : cards.slice(page * cardsPerPage, (page + 1) * cardsPerPage);

  return (
    <div>
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative bg-cover bg-center bg-fixed text-white  bg-[url('https://t4.ftcdn.net/jpg/06/51/49/91/360_F_651499128_02uzpyQcBI1ypjF9zNaVxgWvf6Jj4DIU.jpg')]">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-20 mx-auto text-center max-w-7xl px-9 py-32">
          <h1 className="text-4xl font-bold mb-6">ABOUT PAGE</h1>
          <p className="text-xl text-gray-100 font-semibold max-w-2xl mx-auto">
            Personalized, balanced diet plans promoting healthy eating,
            sustainable results, and long-term wellness.
          </p>
          <p className="text-lg text-indigo-300"><Link to="/">Home</Link> <span className="text-orange-400 font-semibold">&gt; <Link to="/contact">Contact</Link></span>
                </p>
        </div>
      </section>
      {/* ===================== ABOUT SECTION ===================== */}
      <section className="px-6 md:px-16 py-16 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>
            <p className="text-sm tracking-widest text-gray-500 mb-3">ABOUT US</p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              We Help To Get <br />
              <span className="text-orange-500">Fitness</span> Goal
            </h1>

            <p className="text-gray-600 mt-4">
              We are an independent gym committed to working with you to gain the
              results you want. Whether your aim is to lose weight, tone up,
              build bulk or gain muscle, we can put together a gym program for you.
            </p>

            <div className="flex gap-4 mt-6">
              <button className="px-6 py-2 bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600">
                Our Mission
              </button>

              <button className="px-6 py-2 border border-orange-500 text-orange-500 rounded-full hover:bg-orange-100">
                Our Vision
              </button>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="text-orange-500 text-xl">📞</div>
              <p className="font-semibold">
                Call us for help<br />
                <span className="text-lg text-gray-900">12 452 1505</span>
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://thumbs.dreamstime.com/b/fitness-training-athletic-sporty-man-doing-plank-exercise-gym-yoga-class-exercising-workout-70718580.jpg"
                alt="Fitness video"
                className="w-full h-60 object-cover"
              />
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/80 backdrop-blur p-4 rounded-full shadow-xl">▶</button>
              </div> */}
              <span className="absolute top-3 right-3 bg-white text-sm px-3 py-1 rounded-full shadow">
                High Quality Video
              </span>
            </div>

            <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images7.alphacoders.com/138/1387311.jpg"
                alt="Trainer"
                className="w-full h-60 object-cover"
              />
              <span className="absolute top-3 left-3 bg-white text-sm px-3 py-1 rounded-full shadow">
                Professional Trainer
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* ===================== LATEST NEWS FEED ===================== */}
      <section className="py-20 bg-white">

        {/* Title & Navigation */}
        <div className="max-w-6xl mx-auto px-6 mb-12 flex items-center justify-between">

          <h2 className="text-4xl font-extrabold">
            Latest <span className="text-orange-500 italic">News Feed</span>
          </h2>

          <div className="flex items-center gap-4 text-sm font-semibold">

            {/* Prev Arrow */}
            <button
              onClick={() => !showAll && setPage(prev => prev > 0 ? prev - 1 : totalPages - 1)}
              className="bg-orange-500 text-white px-3 py-2 rounded-md"
            >
              ←
            </button>

            <span className="text-gray-500">
              {showAll ? "All" : String(page + 1).padStart(2, "0")}
              {!showAll && <span className="ml-2">{String(totalPages).padStart(2, "0")}</span>}
            </span>

            {/* Next Arrow */}
            <button
              onClick={() => !showAll && setPage(prev => (prev + 1) % totalPages)}
              className="bg-orange-500 text-white px-3 py-2 rounded-md"
            >
              →
            </button>

            {/* Show All Button */}
            <button
              onClick={() => setShowAll(!showAll)}
              className="ml-4 border-2 border-orange-500 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-500 hover:text-white transition"
            >
              {showAll ? "Show Less" : "Show All"}
            </button>

          </div>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

          {displayedCards.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-xl border hover:shadow-2xl transition overflow-hidden"
            >
              <img src={c.img} alt="news" className="w-full h-52 object-cover" />

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 gap-2 mb-4">
                  <span>👤 {c.author}</span>
                  <span>•</span>
                  <span>{c.date}</span>
                </div>

                <h3 className="text-xl font-bold mb-3">{c.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A wonderful serenity has taken possession of my entire soul.
                </p>

                <button className="bg-orange-500 text-white px-5 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-orange-600 transition">
                  Read More <span>➜</span>
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default About;
