"use client";
import ValidationError from "@/app/exceptions/ValidationErrors";
import {  withFormik } from "formik";
import * as yup from "yup";

import {  toast } from "react-toastify";
import ContactModel from "@/app/models/ContactModel";
import MessageError from "@/app/exceptions/MessageError";
import Post from "@/app/tools/ApiManager";
import innerContactForm from "./InnerContactForm";
const ContactFormSchema = yup.object().shape({
  name: yup.string().required().min(2).max(255),
  email: yup.string().required().email(),
  content: yup.string().required().min(2).max(500),
});
export interface ContactDefaultValues {}
const ContactForm = withFormik<ContactDefaultValues, ContactModel>({
  mapPropsToValues: (props) => {
    return {
      name: "",
      email: "",
      content: "",
    };
  },
  handleSubmit: async (
    values,
    { props, setFieldError, setSubmitting, resetForm }
  ) => {
    try {
      setSubmitting(true);
      const data = await Post({
        url: "https://react-camp-api.roocket.ir/api/nooshifard@yandex.com/contact",
        values,
      });
      if (data?.message) {
        toast.success("Message Sended...");
        setSubmitting(false);
      }
      resetForm();
    } catch (error: any) {
      setSubmitting(false);
      if (error instanceof ValidationError) {
        Object.entries(error.messages).forEach(([key, value]) =>
          setFieldError(key, value as string)
        );
      }
      if (error instanceof MessageError) {
        toast.error(error.messages);
      }
    }
  },
  validationSchema: ContactFormSchema,
})(innerContactForm);

export default ContactForm;
