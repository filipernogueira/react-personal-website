import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";

export default function UniversityCard({
    logo,
    name,
    degreeType,
    degree,
    description,
    duration,
    url,
}: {
    logo: string;
    name: string;
    degreeType: string;
    degree: string;
    description: string;
    duration: string;
    url: string;
}) {
    return (
        <Card className="w-96 h-[34.6rem] overflow-hidden">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none flex justify-center items-center"
            >
                <img className="h-20 mt-8" src={logo} alt="University image" />
            </CardHeader>
            <CardBody>
                <Typography variant="h4" color="blue-gray">
                    {name}
                </Typography>
                <Typography variant="h5" color="blue-gray">
                    {degreeType}
                </Typography>
                <Typography variant="h6" color="blue-gray">
                    {degree}
                </Typography>
                <Typography color="gray" className="mt-3 w-full">
                    {description}
                </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between mt-auto">
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <Button>Discover</Button>
                </a>
                <Typography className="font-normal">{duration}</Typography>
            </CardFooter>
        </Card>
    );
}
