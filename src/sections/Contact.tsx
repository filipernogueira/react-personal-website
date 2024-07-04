import { Form } from "../components";

const Contact = () => {
    return (
        <div
            id="contact"
            className="w-full bg-gray-100 flex flex-col justify-start items-center p-10 rounded-2xl shadow-2xl"
        >
            <h1 className="text-3xl mb-10">Contact</h1>
            <Form />
        </div>
    );
};

export default Contact;
