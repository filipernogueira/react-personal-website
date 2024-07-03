import React from "react";
import { StepperWithIcon, UniversityCard } from "../components";
import IST from "../assets/universities/IST.png"
import THU from "../assets/universities/THU.png"
import Telecom from "../assets/universities/Telecom.png"
import questionMark from "../assets/flags/questionMark.png"

const universities = [
  {logo: IST, name: "Instituto Superior Técnico", degreeType: "Bachelor's degree", degree: "Computer Science and Telecommunications Engineering", description: "Final Project done with INESC-ID on a Anonimization Application to help Supreme Justice Court's workers.", duration: "2020 - 2024", url: ""},
  {logo: Telecom, name: "Télécom Paris", degreeType: "Exchange Program (Athens Program)", degree: "Formal Methods", description: "Intensive 1-week course, where I had my first opportunity to study abroad, and get to know people from all over the world.", duration: "Nov 2023", url: ""},
  {logo: THU, name: "Tsinghua University", degreeType: "Exchange Program", degree: "Computer Science", description: "#11 Computer Science University on the World (QS Top Universities 31/05/2024). Definetly the best opportunity of my life. Moving to the other side of the world made me grow a lot, personally and professionally. Discovered a culture totally different from mine, and the connections made here were huge. Grade: X.X/4.0", duration: "Feb 2024 - Jun 2024", url: ""},
  {logo: IST, name: "Instituto Superior Técnico", degreeType: "Master's degree", degree: "Computer Science and Telecommunications Engineering", description: "Specializations: Cybersecurity & Data Science", duration: "2023 - 2025", url: ""},
  {logo: questionMark, name: "Unknown", degreeType: "PhD", degree: "Computer Science", description: "It's still an unknown, but maybe on the future, if it arises a PhD degree, it would be Artificial Intelligence or Cybersecurity related. The university that I will choose, will be somewhere in Asia or USA. Until then I want to gain more work experience in startups", duration: "", url: ""},
]

const Education = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <div className="w-full bg-black flex flex-col justify-start items-center mt-10 p-10">
      <h1 className="text-3xl text-white mb-10">Education (falta Huawei)</h1>
        <div className="mb-10 w-96">
          <StepperWithIcon activeStep={activeStep} setActiveStep={setActiveStep} />
        </div>
        <UniversityCard logo={universities[activeStep].logo} name={universities[activeStep].name} degreeType={universities[activeStep].degreeType} degree={universities[activeStep].degree} description={universities[activeStep].description} duration={universities[activeStep].duration} url={universities[activeStep].url}  />
    </div>
  )
}

export default Education