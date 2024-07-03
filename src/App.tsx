import './App.css'
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Education from "./sections/Education";

function App() {

  return (
    <div className="flex flex-col items-center p-5 text-black">
      <Navbar />
      <Home />
      <Education />
    </div>
  )
}

export default App
