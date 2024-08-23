import { Form, FormikProps } from "formik";
import InputControl from "../../controls/Input";
import { BiSolidUser } from "react-icons/bi";
import ContactModel from "@/app/models/ContactModel";
import TextAreaControl from "../../controls/textArea";
import { FaMessage } from "react-icons/fa6";
import Spinner from "../../shared/Spinner";
type ContactFormProps = FormikProps<ContactModel> & {
  contact: ContactModel;
};
export default function innerCommentForm(params: ContactFormProps) {
  return (
    <div className="flex gap-4 py-2 px-2 grid-cols-4">
      <Form>
        <InputControl
          label=" Name:"
          id="name"
          name="name"
          type="text"
          placeholder="Enter Your Name..."
          icon={BiSolidUser}
        />

        <TextAreaControl
          label="Comment:"
          id="content"
          name="content"
          placeholder="Enter Your Comment..."
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
