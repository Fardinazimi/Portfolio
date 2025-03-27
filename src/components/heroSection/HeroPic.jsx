import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center relative"
    >
      <img
        src="/images/Fardin1.png"
        alt="Fardin Azimi"
        className="max-h-[200px] xs:max-h-[250px] sm:max-h-[300px] md:max-h-[350px] w-auto"
      />

      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <PiHexagonThin
          className="h-[300px] xs:h-[400px] sm:h-[500px] md:h-[600px] 
          w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]"
        />
      </div>
    </motion.div>
  );
};

export default HeroPic;
