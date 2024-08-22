import { Form, FormikProps } from "formik";
import InputControl from "../controls/Input";
import { BiSolidUser } from "react-icons/bi";
import ContactModel from "@/app/models/ContactModel";
import { FaMailBulk } from "react-icons/fa";
import TextAreaControl from "../controls/textArea";
import { FaMessage } from "react-icons/fa6";
import LoadingSpinner from "../shared/loadingSpinner";
import Spinner from "../shared/Spinner";
type ContactFormProps = FormikProps<ContactModel> & {
  contact: ContactModel;
};
export default function innerContactForm(params: ContactFormProps) {
  return (
    <div className="flex gap-4 py-2 px-2 grid-cols-4">
      <Form>
        <InputControl
          label="Contact Name:"
          id="name"
          name="name"
          type="text"
          placeholder="Enter Your Name..."
          icon={BiSolidUser}
        />
        <InputControl
          label="Email:"
          id="email"
          name="email"
          type="email"
          placeholder="Enter Your Email..."
          icon={FaMailBulk}
        />
        <TextAreaControl
          label="Message:"
          id="content"
          name="content"
          placeholder="Enter Your Message..."
          icon={FaMessage}
        />
        <div className="flex justify-center py-5 gap-2">
          <button
            disabled={params.isSubmitting}
            className="bg-red-400 hover:bg-red-500 hover:font-bold text-stone-100 px-5 py-2 rounded-md "
            type="submit"
          >
            Send {params.isSubmitting && <Spinner />}
          </button>
        </div>
      </Form>
    </div>
  );
}
