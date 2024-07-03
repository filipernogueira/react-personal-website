import './App.css'
import {Navbar} from "./components";
import { Home, Education, Experience } from "./sections";

function App() {

  return (
    <div className="flex flex-col items-center p-5 text-black">
      <Navbar />
      <Home />
      <Education />
      <Experience />
    </div>
  )
}

export default App
