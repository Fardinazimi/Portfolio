import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  const handleDownloadCV = () => {
    // The path to your CV file
    const cvPath = '/assets/Fardin_Azimi_CV.pdf';
    
    // Create a link element
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Fardin_Azimi_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col gap-2 xs:gap-3 sm:gap-4 h-full justify-center text-center md:text-left">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-base xs:text-lg sm:text-xl lg:text-2xl uppercase text-lightGrey"
      >
        Full stack web developer
      </motion.h2>
      <div className="space-y-3 xs:space-y-4">
        <motion.h1
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="text-3xl xs:text-4xl sm:text-5xl md:text-[2.8rem] lg:text-6xl text-orange font-bold uppercase"
        >
          Fardin Azimi
          <br className="hidden md:block" />
        </motion.h1>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="w-full md:w-auto flex justify-center md:justify-start"
        >
          <button
            onClick={handleDownloadCV}
            className="bg-cyan hover:bg-cyan/80 text-black font-semibold 
            py-2 px-3 xs:py-2 xs:px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6 rounded-full
            transition-all duration-300 flex items-center gap-1.5 xs:gap-2 hover:gap-3
            text-xs xs:text-sm md:text-base
            w-auto
            shadow-lg hover:shadow-xl"
          >
            Download CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-3.5 h-3.5 xs:w-4 xs:h-4 md:w-5 md:h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </button>
        </motion.div>
      </div>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-sm xs:text-base sm:text-lg mt-2 xs:mt-3 sm:mt-4 px-2 xs:px-4 sm:px-0"
      >
        A Passionate Web Developer and Instructor <br className="hidden xs:block" /> with 15 months of
        experience.
      </motion.p>
    </div>
  );
};

export default HeroText;
