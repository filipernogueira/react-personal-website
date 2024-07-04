import { Button } from "@material-tailwind/react";
import profilePicture from "../assets/profilePicture.jpg";

const Home = () => {
    return (
        <div
            id="home"
            className="w-full h-screen bg-gray-100 flex justify-center items-center my-10 rounded-2xl shadow-2xl"
        >
            <div className="flex flex-col mr-40 justify-center items-center">
                <span className="text-5xl">Hello, I'm Filipe</span>
                <span className="text-lg my-2">
                    A creative Developer and Designer.
                </span>
                <a
                    href="https://www.linkedin.com/in/-filipe-nogueira/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button className="rounded-full h-10 bg-blue-500 text-white">
                        Check my Linkedin
                    </Button>
                </a>
            </div>
            <img
                className="h-96 w-96 rounded-full object-cover object-center"
                src={profilePicture}
                alt="nature image"
            />
        </div>
    );
};

export default Home;
