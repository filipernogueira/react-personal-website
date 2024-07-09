import "./App.css";
import { useState } from "react";
import { Navbar } from "./components";
import { Home, Education, Experience, Contact, Footer } from "./sections";

function App() {
    const [isDarkModeOn, setIsDarkModeOn] = useState<boolean>(false);
    return (
        <div
            className={`flex flex-col items-center sm:p-10 p-4 text-black ${
                isDarkModeOn ? "bg-gray-700" : ""
            }`}
        >
            <Navbar />
            <Home darkMode={isDarkModeOn} />
            <Education darkMode={isDarkModeOn} />
            <Experience darkMode={isDarkModeOn} />
            <Contact darkMode={isDarkModeOn} />
            <Footer darkMode={isDarkModeOn} />
            <div
                className={`w-12 h-12 ${
                    isDarkModeOn ? "bg-gray-300" : "bg-gray-800"
                } fixed right-14 bottom-6 rounded-full sm:flex justify-center items-center hidden cursor-pointer shadow-lg`}
                onClick={() => setIsDarkModeOn((prev) => !prev)}
            >
                {!isDarkModeOn ? (
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M50,0 A50,50 0 1,0 50,100 A30,50 0 1,1 50,0"
                            fill="white"
                        />
                    </svg>
                ) : (
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="50" cy="50" r="20" fill="black" />
                        <g stroke="black" stroke-width="4">
                            <line x1="50" y1="10" x2="50" y2="0" />
                            <line x1="50" y1="90" x2="50" y2="100" />
                            <line x1="10" y1="50" x2="0" y2="50" />
                            <line x1="90" y1="50" x2="100" y2="50" />
                            <line x1="75" y1="75" x2="85" y2="85" />
                            <line x1="25" y1="25" x2="15" y2="15" />
                            <line x1="75" y1="25" x2="85" y2="15" />
                            <line x1="25" y1="75" x2="15" y2="85" />
                        </g>
                    </svg>
                )}
            </div>
        </div>
    );
}

export default App;
