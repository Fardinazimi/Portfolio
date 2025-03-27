import React from "react";
import SingleExperience from "./SingleExperience";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Purchase Oﬃcer in North zone",
    company: "Interactive Euro Technology Limited",
    date: "03/2006 - 09/2007",
    responsibilities: [
      "I was responsible for sourcing and preparing installation materials,locating optimal sites for Etisalat antennas, and organizing construction materials.",
      "I was also responsible for managing the budget and ensuring that the projects were completed on time.",
      "",
      "",
    ],
  },
  {
    job: "President",
    company: "FARCC",
    date: "08/2010 - 11/2016,",
    responsibilities: [
      "I Owned Fawad Azimi Road and Construction Company (FARCC), which completed numerous projects such as building schools, roads, Etisalat antennas, hospitals, clinics, etc.",
      // add more details as needed
      "",
      "",
    ],
  },
  {
    job: "Administrative Oﬃcer Assistant to the HR",
    company: "Vodafone Greece",
    date: "04/2017 - 10/2017,",
    responsibilities: [
      "Managed employee facilities, ensured safety in designated areas, and prepared reports for supervisors, alongside various administrative tasks.",

      //  add more details as needed
      "",
      "",
    ],
  },
  {
    job: "Migration Period & Career Transformation",
    company: "Hanau, Germany",
    date: "12/2017 - 12/2023,",
    responsibilities: [
      "Finished a B1 language course and passing the integration test.",
      "Full-time parenting, supporting my family during the integration.",
      "",
      "",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <React.Fragment key={index}>
            <SingleExperience experience={experience} />
            {index < experiences.length - 1 && (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="text-7xl text-orange lg:block sm:hidden"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path>
                </svg>
              </motion.div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AllExperiences;
