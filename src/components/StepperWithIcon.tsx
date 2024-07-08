import React, { useState } from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import { University } from "../types";

export default function StepperWithIcon({
    activeStep,
    setActiveStep,
    universities,
}: {
    activeStep: number;
    setActiveStep: React.Dispatch<React.SetStateAction<number>>;
    universities: University[];
}) {
    const [isLastStep, setIsLastStep] = useState<boolean>(false);
    const [isFirstStep, setIsFirstStep] = useState<boolean>(false);

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    return (
        <div className="w-full">
            <Stepper
                activeStep={activeStep}
                isLastStep={(value) => setIsLastStep(value)}
                isFirstStep={(value) => setIsFirstStep(value)}
            >
                {universities.map((uni: University, idx: number) => (
                    <Step
                        key={idx}
                        className="bg-gray-400"
                        onClick={() => setActiveStep(idx)}
                    >
                        <img src={uni.countryFlag} className="w-5 h-5" />
                    </Step>
                ))}
            </Stepper>
            <div className="mt-8 flex justify-between">
                <Button onClick={handlePrev} disabled={isFirstStep}>
                    Prev
                </Button>
                <Button
                    onClick={handleNext}
                    disabled={isLastStep}
                    className={activeStep === 0 ? "animate-pulse" : ""}
                >
                    Next
                </Button>
            </div>
        </div>
    );
}
