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

export default function TimelineWithIcon() {
    const [ref, isInView] = useInView({ threshold: 0.9 });
    const [ref2, isInView2] = useInView({ threshold: 0.9 });

    return (
        <div className="sm:w-[32rem] w-7/8">
            <Timeline>
                <TimelineItem
                    ref={ref}
                    className={`transition-opacity duration-1000 ${
                        isInView ? "opacity-100" : "opacity-0"
                    }`}
                >
                    {isInView2 && <TimelineConnector />}{" "}
                    {/* Conditionally render the connector */}
                    <TimelineHeader>
                        <TimelineIcon className="p-2">
                            <ComputerDesktopIcon className="h-4 w-4" />
                        </TimelineIcon>
                        <Typography variant="h5" color="blue-gray">
                            Web Dev Team Lead
                        </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8">
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="text-left"
                        >
                            Twinkle
                        </Typography>
                        <Typography
                            color="blue-gray"
                            className="text-left mb-3"
                        >
                            Jun 2022 - Present
                        </Typography>
                        <Typography
                            color="gray"
                            className="font-normal text-gray-600 text-justify"
                        >
                            Twinkle is a startup aimed at enhancing the
                            restaurant experience through innovative on-premise
                            ordering, payment, and reservation solutions. We've
                            developed three main products, all connected through
                            a unified API. I lead the development of the
                            startup's websites, and connecting it to a backend.
                        </Typography>
                    </TimelineBody>
                </TimelineItem>
                <TimelineItem
                    ref={ref2}
                    className={`transition-opacity duration-1000 ${
                        isInView2 ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <TimelineHeader>
                        <TimelineIcon className="p-2">
                            <ClockIcon className="h-4 w-4" />
                        </TimelineIcon>
                        <Typography variant="h5" color="blue-gray">
                            Web Developer
                        </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8">
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="text-left"
                        >
                            Student Hub
                        </Typography>
                        <Typography
                            color="blue-gray"
                            className="text-left mb-3"
                        >
                            Starting in Sep 2024
                        </Typography>
                        <Typography
                            color="gray"
                            className="font-normal text-gray-600 text-justify"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis tincidunt consequat elit, in lobortis
                            orci facilisis ut. Cras aliquet ligula ac pharetra
                            aliquam. Fusce vel ligula non nulla lacinia
                            vestibulum. Proin vel ex vel risus accumsan euismod.
                            Integer commodo lorem nec nisl feugiat, quis
                            scelerisque tortor accumsan.
                        </Typography>
                    </TimelineBody>
                </TimelineItem>
            </Timeline>
        </div>
    );
}
