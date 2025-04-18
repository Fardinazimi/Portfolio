import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "World Trivia Game ",
    year: "November 2024",
    align: "right",
    image: "/images/World-Trivia.png",
    link: "https://worldtriviagame.onrender.com",
  },
  {
    name: "Job Compass",
    year: "February 2024",
    align: "left",
    image: "/images/jobCompass.png",
    link: "https://job-compass-frontend.onrender.com",
  },
  {
    name: "Balkh Food Express",
    year: "present Project",
    align: "right",
    image: "/images/Balkhfood.png",
    link: "https://balkh-food-express-frontend.vercel.app/",
  },
  {
    name: "Bank of Luck",
    year: "May2024",
    align: "left",
    image: "/images/website-img-4.jpg",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
