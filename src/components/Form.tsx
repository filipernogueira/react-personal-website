import { Card, Input, Button, Typography } from "@material-tailwind/react";

export default function SimpleRegistrationForm() {
    return (
        <Card
            className="flex flex-col justify-center items-start"
            color="transparent"
            shadow={false}
        >
            <Typography variant="h4" color="blue-gray">
                Contact
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Feel free to contact me to collaborate, or just to chat!
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6 items-start">
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                    >
                        Name
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="Your name"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                    >
                        Email
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="name@mail.com"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                    >
                        Message
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="Your message"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                </div>
                <Button className="mt-6" fullWidth>
                    Send
                </Button>
            </form>
        </Card>
    );
}
