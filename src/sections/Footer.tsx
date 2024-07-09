import { FooterComponent } from "../components";

const Footer = ({ darkMode }: { darkMode: boolean }) => {
    return (
        <div
            className={`w-full ${
                darkMode ? "bg-gray-900" : "bg-gray-300"
            } flex flex-col justify-start items-center mt-10 p-10 rounded-2xl shadow-2xl`}
        >
            <FooterComponent darkMode={darkMode} />
        </div>
    );
};

export default Footer;
