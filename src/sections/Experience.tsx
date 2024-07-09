import { Timeline, SectionTitle } from "../components";

const Experience = ({ darkMode }: { darkMode: boolean }) => {
    return (
        <div
            id="experience"
            className={`w-full bg-gray-100 flex flex-col justify-start items-center my-10 sm:p-10 p-8 rounded-2xl shadow-2xl ${
                darkMode ? "bg-gray-900" : "bg-gray-100"
            }`}
        >
            <SectionTitle title="Experience" darkMode={darkMode} />
            <Timeline darkMode={darkMode} />
        </div>
    );
};

export default Experience;
