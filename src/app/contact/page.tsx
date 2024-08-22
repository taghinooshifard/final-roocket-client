import { FaAddressBook, FaMailBulk, FaMobile } from "react-icons/fa";
import { FaCity, FaMobileScreen, FaPhone } from "react-icons/fa6";
import ContactForm from "../components/forms/ContactForm";

interface Props {}
export default function ContactPage(params: Props) {
  return (
    <>
      <div className="text-center pt-12 pb-9">
        <h3 className="text-2xl ">Contact</h3>
      </div>
      <div className="px-5 mt-24 space-y-3 italic">
        <address className="flex items-center gap-2 hover:font-bold">
          <FaCity /> Tehran.Azadi Tower
        </address>
        <div className="flex items-center  gap-2 hover:font-bold">
          <FaMobileScreen /> +989903503018
        </div>
        <div className="flex items-center  gap-2 hover:font-bold">
          <FaMailBulk /> nooshifard@gmail.com
        </div>
      </div>
        <div className="flex justify-center border-t-8 mt-3 border-red-400 ">
        <fieldset className="flex justify-center border border-red-400 w-3/6 my-4 rounded-md">
        <legend>Send Your Message</legend>
        <ContactForm />
      </fieldset>
        </div>
    </>
  );
}
