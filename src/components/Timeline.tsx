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
import useInView from "../hooks/useInView";
import { experiences } from "../information";

interface Experience {
    role: string;
    company: string;
    duration: string;
    description: string;
}

export default function TimelineWithIcon({ darkMode }: { darkMode: boolean }) {
    const refs = experiences.map(() => useInView({ threshold: 0.9 }));
    const icons = [
        <ComputerDesktopIcon className={`h-4 w-4 ${darkMode ? "" : ""}`} />,
        <ClockIcon className={`h-4 w-4 ${darkMode ? "" : ""}`} />,
    ];

    return (
        <div className="sm:w-[32rem] w-7/8">
            <Timeline>
                {experiences.map((experience: Experience, index: number) => {
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
                                <TimelineIcon
                                    className={`p-2 ${
                                        darkMode ? "bg-gray-700" : ""
                                    }`}
                                >
                                    {icons[index]}
                                </TimelineIcon>
                                <Typography
                                    variant="h5"
                                    color="blue-gray"
                                    className={darkMode ? "text-gray-100" : ""}
                                >
                                    {experience.role}
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography
                                    variant="h6"
                                    color="blue-gray"
                                    className={`text-left ${
                                        darkMode ? "text-gray-100" : ""
                                    }`}
                                >
                                    {experience.company}
                                </Typography>
                                <Typography
                                    color="blue-gray"
                                    className={`text-left mb-3 ${
                                        darkMode ? "text-gray-100" : ""
                                    }`}
                                >
                                    {experience.duration}
                                </Typography>
                                <Typography
                                    color="gray"
                                    className={`font-normal text-gray-600 text-justify ${
                                        darkMode ? "text-white" : ""
                                    }`}
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
