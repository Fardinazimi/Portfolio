import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="azimifardeen@hotmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+49 173 795 517 85" Image={FiPhone} />
      <SingleInfo text="Germany, Hanau" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
