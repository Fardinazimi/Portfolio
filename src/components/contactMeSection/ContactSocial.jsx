import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/azimifardin"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/Fardinazimi"
        Icon={FiGithub}
      />
      {/* as we need only 2 social links we will add it later */}
      {/* <SingleContactSocial
        link="https://www.instagram.com/fardin.yp"
        Icon={FaInstagram}
      /> */}
    </div>
  );
};

export default ContactSocial;
