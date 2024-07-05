import { Button } from "@material-tailwind/react";
import profilePicture from "../assets/profilePicture.jpg";

const Home = () => {
    return (
        <div
            id="home"
            className="w-full sm:h-screen bg-gray-100 flex sm:flex-row justify-center items-center my-10 sm:p-10 p-8 rounded-2xl shadow-2xl flex-col"
        >
            <div className="flex flex-col sm:mr-40 justify-center items-center sm:mb-0 mb-10">
                <span className="sm:text-5xl text-4xl">Hello, I'm Filipe</span>
                <span className="text-lg my-2">A Student and Developer.</span>
                <a
                    href="https://drive.google.com/file/d/1pGR4YFF2zZHYWLu1mpNMHczHDjQkagSP/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button className="rounded-full h-10 bg-blue-500 text-white">
                        Check my CV
                    </Button>
                </a>
            </div>
            <img
                className="sm:w-1/4 w-1/2 rounded-full object-cover object-center"
                src={profilePicture}
                alt="nature image"
            />
        </div>
    );
};

export default Home;
