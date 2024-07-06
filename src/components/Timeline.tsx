import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
} from "@material-tailwind/react";
import { ComputerDesktopIcon, ClockIcon } from "@heroicons/react/24/solid";
import useInView from "../components/useInView";
import { experiences } from "../information";

export default function TimelineWithIcon() {
    const refs = experiences.map(() => useInView({ threshold: 0.9 }));
    const icons = [
        <ComputerDesktopIcon className="h-4 w-4" />,
        <ClockIcon className="h-4 w-4" />,
    ];

    return (
        <div className="sm:w-[32rem] w-7/8">
            <Timeline>
                {experiences.map((experience, index) => {
                    const [ref, isInView] = refs[index];
                    const isNextInView =
                        index < refs.length - 1 && refs[index + 1][1];
                    return (
                        <TimelineItem
                            key={index}
                            ref={ref}
                            className={`transition-opacity duration-1000 ${
                                isInView ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            {index < experiences.length - 1 && isNextInView && (
                                <TimelineConnector />
                            )}
                            <TimelineHeader>
                                <TimelineIcon className="p-2">
                                    {icons[index]}
                                </TimelineIcon>
                                <Typography variant="h5" color="blue-gray">
                                    {experience.role}
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography
                                    variant="h6"
                                    color="blue-gray"
                                    className="text-left"
                                >
                                    {experience.company}
                                </Typography>
                                <Typography
                                    color="blue-gray"
                                    className="text-left mb-3"
                                >
                                    {experience.duration}
                                </Typography>
                                <Typography
                                    color="gray"
                                    className="font-normal text-gray-600 text-justify"
                                >
                                    {experience.description}
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                    );
                })}
            </Timeline>
        </div>
    );
}
