import { useState } from "react";
import {Link} from "react-router-dom"

const faqs = [
    {
        question: "Do you have fitness programs for men?",
        answer: "Yes, we provide customized fitness programs designed specifically for men based on their goals."
    },
    {
        question: "When will I see the results?",
        answer: "Most people see visible changes within 4–6 weeks with consistency in diet and training."
    },
    {
        question: "Why can't I lose weight though I train a lot?",
        answer: "Weight loss depends on several factors including diet, sleep, stress, and workout intensity."
    },
    {
        question: "Do you offer one-on-one training?",
        answer: "Yes, personalized 1-on-1 online and offline coaching sessions are available."
    },
    {
        question: "What does a nutrition plan include?",
        answer: "It includes daily meal plans, calorie targets, macros, snack suggestions, and hydration goals."
    }
];

const FAQItem = ({ q, a }) => {
    const [open, setOpen] = useState(false);

    return (



        <div className="border-b border-gray-300 py-4">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center text-left"
            >
                <span className="text-lg font-semibold text-gray-800">{q}</span>
                <span className="text-2xl font-bold text-gray-700">
                    {open ? "−" : "+"}
                </span>
            </button>

            {open && (
                <p className="mt-3 text-gray-600 pr-8 leading-relaxed">{a}</p>
            )}
        </div>
    );
};

export default function ContactFAQ() {
    return (
        <>
            <div className="w-full bg-[url('https://www.webfx.com/wp-content/uploads/2023/08/032431_40_Best_Contact_Us_Page_Designs.png')] bg-fixed bg-cover bg-center text-white text-center py-20">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide mb-4">CONTACTS</h1>
                <p className="text-lg text-indigo-300"><Link to="/about">About</Link> <span className="text-orange-400 font-semibold">&gt; Contacts</span></p>
            </div>
            <section className="px-6 md:px-24 py-20 bg-[#F5F3FF] min-h-screen">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    {/* CONTACT FORM */}
                    <div className="bg-white shadow-xl rounded-2xl p-8">
                        <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                        <input className="w-full bg-[#F5F3FF] p-4 rounded-xl mb-4 outline-none" placeholder="Enter your name*" />
                        <input className="w-full bg-[#F5F3FF] p-4 rounded-xl mb-4 outline-none" placeholder="Enter your e-mail*" />
                        <select className="w-full bg-[#F5F3FF] p-4 rounded-xl mb-4 outline-none text-gray-600">
                            <option>Program</option>
                            <option>Weight Loss</option>
                            <option>Muscle Gain</option>
                            <option>Strength Training</option>
                        </select>
                        <textarea rows="4" className="w-full bg-[#F5F3FF] p-4 rounded-xl mb-6 outline-none text-gray-600"
                            placeholder="Tell me about your fitness goals" />

                        <button className="w-full bg-[#f4a545] text-white py-3 rounded-full font-semibold tracking-wide">
                            SEND
                        </button>
                    </div>

                    {/* FAQ SECTION */}
                    <div>
                        <p className="text-sm font-semibold text-[#ffaa56] uppercase tracking-widest mb-2">
                            / Contacts /
                        </p>
                        <h1 className="text-4xl font-extrabold text-[#38383e] mb-4">
                            HAVE QUESTIONS?
                        </h1>
                        <p className="text-gray-600 mb-10 max-w-md">
                            You may find answers below. Otherwise, feel free to contact me.
                        </p>

                        {faqs.map((item, i) => (
                            <FAQItem key={i} q={item.question} a={item.answer} />
                        ))}
                    </div>
                </div>
            </section>
            <div className="min-h-screen  text-center p-6">
                <div className="mt-10 text-sm font-bold text-indigo-500 tracking-widest">/ GET IN TOUCH /</div>
                <h1 className="text-3xl md:text-6xl font-bold mt-4 mb-6">
                    I CAN HELP YOU GET IN SHAPE
                </h1>
                <p className="text-lg text-indigo-600 mb-12 max-w-2xl mx-auto">
                    Contact me, and I will create a plan designed especially for you.
                </p>
                <div className="flex flex-wrap justify-center gap-6 pb-20">
                    {/* CALL ME */}
                    <div className="border border-gray-300 text-[#3b2d6c] w-60 p-10 rounded-2xl shadow-xl">
                        <div className="w-20 h-20 bg-purple-100 text-purple-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">📞</div>
                        <div className="font-bold tracking-wider mb-3">CALL ME</div>
                        <p>+1 (234) 567 89 00</p>
                        <p>+1 (234) 567 89 01</p>
                    </div>


                    {/* MAIL ME */}
                    <div className=" border border-gray-300  text-[#3b2d6c] w-60 p-10 rounded-2xl shadow-xl">
                        <div className="w-20 h-20 bg-purple-100 text-purple-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                            ✉️
                        </div>
                        <div className="font-bold tracking-wider mb-3">MAIL ME</div>
                        <p>e.mason@email.com</p>
                        <p>help.mason@email.com</p>
                    </div>


                    {/* FIND ME */}
                    <div className="bg-white border border-gray-300 text-[#3b2d6c] w-60 p-10 rounded-2xl shadow-xl">
                        <div className="w-20 h-20 bg-purple-100 text-purple-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                            📍
                        </div>
                        <div className="font-bold tracking-wider mb-3">FIND ME</div>
                        <p>45 Rockefeller Plaza</p>
                        <p>New York, NY 10111, USA</p>
                    </div>


                    {/* PROGRAMS */}
                    <div className="bg-orange-400 border border-gray-300 text-white w-60 p-10 rounded-2xl shadow-xl">
                        <div className="w-20 h-20 bg-white/40 text-white rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                            🏋️
                        </div>
                        <div className="font-bold tracking-wider mb-5">PROGRAMS</div>
                        <button className="text-xs mt-5  px-6 py-2 border-2 border-white rounded-lg font-bold hover:bg-white hover:text-orange-500 transition">
                            CHOOSE NOW +
                        </button>
                    </div>
                </div>
            </div>
        </>

    );
}
