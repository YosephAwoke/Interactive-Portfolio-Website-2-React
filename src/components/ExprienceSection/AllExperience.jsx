import { FaArrowRight } from "react-icons/fa";
import SingleExperience from "./SingleExperience";

const experience = [
  {
    job: "Senior ICT Expert",
    company: "Prime Minister Office of Ethiopia (Unity Park)",
    year: "Jan 2020 - Present",
    responsibilities: [
      "mobile and web app development",
      "deep learning projects",
      "overseeing ICT infrastructure",
      "developing office automation systems",
      "handle graphic design tasks, such as creating flyers, brochures for parks like Unity Park and Friendship Square,",
      "",
    ],
  },
  {
    job: "System development and Maintenance Engineer",
    company: "Technology and Innovation Institute (TechIn2)",
    year: "Jan 2019 - Dec 2019",
    responsibilities: [
      "Participated in various govermantal developemt projects",
      "become familiar with Laravel and React Frameworks",
      "managed the institute’s website and social media prsence",
      "contributed to graphic design tasks",
    ],
  },
  {
    job: "Full-Stack Developer",
    company: "DZ Software Engineering PLC",
    year: "2020 - Present",
    responsibilities: [
      "developed a website for the company’s product",
      "collaborating closely with a team",
      "My work involved using JSP, Java, SQL, and JavaScript to create a robust and functional site",
    ],
  },
];
const AllExperience = () => {
  return (
    <div>
      {experience.map((experience, index) => {
        return (
          <>
            {" "}
            <SingleExperience key={index} experience={experience} />;
            {index < 2 ? <FaArrowRight className="text-6xl text-blue-500 lg:block sm:hidden" /> : ""}
          </>
        );
      })}
    </div>
  );
};

export default AllExperience;
