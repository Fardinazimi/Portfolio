import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <div className="pt-32 xs:pt-40 sm:pt-48 md:pt-60 pb-16 xs:pb-20 sm:pb-24">
      <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto justify-between items-center relative px-3 xs:px-4 gap-8 md:gap-4">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
