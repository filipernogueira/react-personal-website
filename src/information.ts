import profilePicture from "./assets/profilePicture.jpg";
import IST from "./assets/universities/IST.png";
import THU from "./assets/universities/THU.png";
import Telecom from "./assets/universities/Telecom.png";
import questionMark from "./assets/emojis/questionMark.png";
import PT from "./assets/emojis/PT.png";
import FR from "./assets/emojis/FR.png";
import CN from "./assets/emojis/CN.png";
import { University, Experience } from "./types";

// Informations to be used in the Navbar and Home section
export const firstName: string = "Filipe";
export const lastName: string = "Nogueira";
export const cvLink: string =
  "https://drive.google.com/file/d/1pGR4YFF2zZHYWLu1mpNMHczHDjQkagSP/view?usp=sharing"; // Link where you have your cv hosted (ex: Google Drive)
export const smallDescription: string = "A Student and Developer."; // A small description of yourself for the first section
export const profileImage: string = profilePicture;

// Information to be used in the Education section
export const universities: University[] = [
  {
    logo: IST,
    name: "Instituto Superior Técnico",
    degreeType: "Bachelor's degree",
    degree: "Computer Science and Telecommunications Engineering",
    description:
      "Final Project done with INESC-ID on a Anonimization application to help Supreme Justice Court's workers.",
    duration: "2020 - 2024",
    url: "https://tecnico.ulisboa.pt/pt/",
    countryFlag: PT,
  },
  {
    logo: Telecom,
    name: "Télécom Paris",
    degreeType: "Exchange Program (Athens Program)",
    degree: "Formal Methods",
    description:
      "Intensive 1-week course, where I had my first opportunity to study abroad, and get to know people from all over the world.",
    duration: "Nov 2023",
    url: "https://www.telecom-paris.fr/",
    countryFlag: FR,
  },
  {
    logo: THU,
    name: "Tsinghua University",
    degreeType: "Exchange Program",
    degree: "Computer Science",
    description:
      "#11 Computer Science University on the World (QS Top Universities 31/05/2024). Definetly the best opportunity of my life. Moving to the other side of the world made me grow a lot, personally and professionally. Discovered a culture totally different from mine, and the connections made here were huge. Grade: X.X/4.0",
    duration: "Feb 2024 - Jun 2024",
    url: "https://www.tsinghua.edu.cn/en/index.htm",
    countryFlag: CN,
  },
  {
    logo: IST,
    name: "Instituto Superior Técnico",
    degreeType: "Master's degree",
    degree: "Computer Science and Telecommunications Engineering",
    description: "Specializations: Cybersecurity & Data Science",
    duration: "2023 - 2025",
    url: "https://tecnico.ulisboa.pt/pt/",
    countryFlag: PT,
  },
  {
    logo: questionMark,
    name: "Unknown",
    degreeType: "PhD",
    degree: "Computer Science",
    description:
      "It's still an unknown, but maybe on the future, if it arises a PhD degree, it would be Artificial Intelligence or Cybersecurity related. The university that I will choose, will be somewhere in Asia or USA. Until then I want to gain more work experience in startups.",
    duration: "",
    url: "",
    countryFlag: questionMark,
  },
];

// Information to be used in the Education section
export const experiences: Experience[] = [
  {
    role: "Web Dev Team Lead",
    company: "Twinkle",
    duration: "Jun 2022 - Present",
    description:
      "Twinkle is a startup aimed at enhancing the restaurant experience through innovative on-premise ordering, payment, and reservation solutions. We've developed three main products, all connected through a unified API. I lead the development of the startup's websites, and connecting it to a backend.",
  },
  {
    role: "Web Developer",
    company: "Student Hub",
    duration: "Aug 2024 - Present",
    description:
      "Developing the web app of one of the company's products. Constantly collaborating with the backend and design teams, to keep improving the product. Using technologies like React.js, TypeScript, Vite and Next.js.",
  },
];

// Information to be used in the footer
export const sourceCodeLink: string =
  "https://github.com/filipernogueira/react-personal-website";
export const linkedinLink: string =
  "https://www.linkedin.com/in/-filipe-nogueira/";
export const githubLink: string = "https://github.com/filipernogueira";
export const instagramLink: string =
  "https://www.instagram.com/filipernogueira/";
