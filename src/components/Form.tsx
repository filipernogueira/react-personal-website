import { useState, ChangeEvent, FormEvent } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import emailjs from "emailjs-com";

export default function SimpleRegistrationForm({
    darkMode,
}: {
    darkMode: boolean;
}) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const SERVICE_ID: string = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID: string = import.meta.env.VITE_TEMPLATE_ID;
    const USER_ID: string = import.meta.env.VITE_USER_ID;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID).then(
            (response) => {
                console.log("SUCCESS!", response.status, response.text);
                alert("Message sent successfully!");
            },
            (err) => {
                console.log("FAILED...", err);
                alert("Failed to send message. Please try again later.");
            }
        );
    };

    return (
        <Card
            className="flex flex-col justify-center items-start"
            color="transparent"
            shadow={false}
        >
            <Typography
                color="gray"
                className={`font-normal ${darkMode ? "text-white" : ""}`}
            >
                Feel free to contact me to collaborate, or just to chat!
            </Typography>
            <form
                className="mt-8 mb-2 w-full max-w-screen-lg sm:w-96"
                onSubmit={handleSubmit}
            >
                <div className="mb-1 flex flex-col gap-6 items-start">
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className={`-mb-3 ${darkMode ? "text-gray-100" : ""}`}
                    >
                        Name
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="Your name"
                        className={`!border-t-blue-gray-200 focus:!border-t-gray-900 ${
                            darkMode ? "text-gray-100" : ""
                        }`}
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        name="name"
                        onChange={handleChange}
                    />
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className={`-mb-3 ${darkMode ? "text-gray-100" : ""}`}
                    >
                        Email
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="name@mail.com"
                        className={`!border-t-blue-gray-200 focus:!border-t-gray-900 ${
                            darkMode ? "text-gray-100" : ""
                        }`}
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        name="email"
                        onChange={handleChange}
                    />
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className={`-mb-3 ${darkMode ? "text-gray-100" : ""}`}
                    >
                        Message
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="Your message"
                        className={`!border-t-blue-gray-200 focus:!border-t-gray-900 ${
                            darkMode ? "text-gray-100" : ""
                        }`}
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        name="message"
                        onChange={handleChange}
                    />
                </div>
                <Button
                    className={`mt-6 ${
                        darkMode ? "bg-gray-100 text-black" : ""
                    }`}
                    fullWidth
                    type="submit"
                >
                    Send
                </Button>
            </form>
        </Card>
    );
}
