import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
 
export default function UniversityCard({ logo, name, degreeType, degree, description, duration, url }) {
  return (
    <Card className="w-96 overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none flex justify-center items-center"
      >
        <img
          className="h-20 m-5"
          src={logo}
          alt="University image"
        />
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
        <Typography variant="paragraph" color="gray" className="mt-3 w-full">
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <a href={url}><Button>Discover</Button></a>
        <Typography className="font-normal">{duration}</Typography>
      </CardFooter>
    </Card>
  );
}