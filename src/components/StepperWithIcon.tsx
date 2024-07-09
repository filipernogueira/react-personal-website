import React, { useState } from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import { University } from "../types";

export default function StepperWithIcon({
    activeStep,
    setActiveStep,
    universities,
    darkMode,
}: {
    activeStep: number;
    setActiveStep: React.Dispatch<React.SetStateAction<number>>;
    universities: University[];
    darkMode: boolean;
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
                activeLineClassName={darkMode ? "bg-gray-700" : ""}
            >
                {universities.map((uni: University, idx: number) => (
                    <Step
                        key={idx}
                        className={darkMode ? "bg-gray-300" : ""}
                        activeClassName={darkMode ? "bg-gray-700" : ""}
                        completedClassName={darkMode ? "bg-gray-700" : ""}
                        onClick={() => setActiveStep(idx)}
                    >
                        <img src={uni.countryFlag} className="w-5 h-5" />
                    </Step>
                ))}
            </Stepper>
            <div className="mt-8 flex justify-between">
                <Button
                    onClick={handlePrev}
                    disabled={isFirstStep}
                    className={`${darkMode ? "bg-gray-300 text-black" : ""}`}
                >
                    Prev
                </Button>
                <Button
                    onClick={handleNext}
                    disabled={isLastStep}
                    className={`${darkMode ? "bg-gray-300 text-black" : ""} ${
                        activeStep === 0 ? "animate-pulse" : ""
                    }`}
                >
                    Next
                </Button>
            </div>
        </div>
    );
}
