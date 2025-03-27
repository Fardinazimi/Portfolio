import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I am a junior full-stack web developer currently completing a Praktikum,
        where I’m further enhancing my skills in modern web technologies. With
        hands-on experience in React, Express.js, and Vite, I excel at creating
        interactive and scalable web applications. My approach combines a strong
        technical foundation with creativity and problem-solving, allowing me to
        deliver user-centered solutions. I’m passionate about continuous
        learning and applying new skills to real-world projects, making me eager
        to contribute to forward-thinking teams and projects.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
