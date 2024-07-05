import { Timeline } from "../components";

const Experience = () => {
    return (
        <div
            id="experience"
            className="w-full bg-gray-100 flex flex-col justify-start items-center my-10 sm:p-10 p-8 rounded-2xl shadow-2xl"
        >
            <h1 className="text-3xl mb-10">Experience</h1>
            <Timeline />
        </div>
    );
};

export default Experience;
