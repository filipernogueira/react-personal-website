import { Form, SectionTitle } from "../components";

const Contact = ({ darkMode }: { darkMode: boolean }) => {
    return (
        <div
            id="contact"
            className={`w-full bg-gray-100 flex flex-col justify-start items-center sm:p-10 p-8 rounded-2xl shadow-2xl ${
                darkMode ? "bg-gray-900" : "bg-gray-100"
            }`}
        >
            <SectionTitle title="Contact" darkMode={darkMode} />
            <Form darkMode={darkMode} />
        </div>
    );
};

export default Contact;
