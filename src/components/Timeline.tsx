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

export default function TimelineWithIcon() {
    return (
        <div className="sm:w-[32rem] w-7/8">
            <Timeline>
                <TimelineItem>
                    <TimelineConnector />
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
                <TimelineItem>
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
                            Starting in Set 2024
                        </Typography>
                        <Typography
                            color="gray"
                            className="font-normal text-gray-600 text-justify"
                        >
                            The key to more success is to have a lot of pillows.
                            Put it this way, it took me twenty five years to get
                            these plants, twenty five years of blood sweat and
                            tears, and I&apos;m never giving up, I&apos;m just
                            getting started. I&apos;m up to something. Fan luv.
                        </Typography>
                    </TimelineBody>
                </TimelineItem>
            </Timeline>
        </div>
    );
}
