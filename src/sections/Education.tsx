import React from "react";
import { StepperWithIcon, UniversityCard } from "../components";
import { universities } from "../information";

const Education = () => {
    const [activeStep, setActiveStep] = React.useState<number>(0);

    return (
        <div
            id="education"
            className="w-full bg-gray-100 flex flex-col sm:justify-start justify-center items-center sm:p-10 p-8 rounded-2xl shadow-2xl"
        >
            <h1 className="text-3xl text-black mb-10">Education</h1>

            <div className="flex justify-center items-center flex-col sm:flex-row">
                <div className="mb-10 sm:mr-20 sm:pb-40 mr-0 sm:w-96 w-full">
                    <StepperWithIcon
                        activeStep={activeStep}
                        setActiveStep={setActiveStep}
                        universities={universities}
                    />
                </div>
                <UniversityCard
                    logo={universities[activeStep].logo}
                    name={universities[activeStep].name}
                    degreeType={universities[activeStep].degreeType}
                    degree={universities[activeStep].degree}
                    description={universities[activeStep].description}
                    duration={universities[activeStep].duration}
                    url={universities[activeStep].url}
                />
            </div>
        </div>
    );
};

export default Education;
