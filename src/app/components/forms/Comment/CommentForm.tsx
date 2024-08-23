"use client";
import ValidationError from "@/app/exceptions/ValidationErrors";
import { withFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import MessageError from "@/app/exceptions/MessageError";
import Post from "@/app/tools/ApiManager";
import InnerCommentForm from "./InnerCommentForm";
import CommentModel from "@/app/models/CommentModel";
const CommentFormSchema = yup.object().shape({
  name: yup.string().required().min(2).max(255),
  content: yup.string().required().min(2).max(500),
});
export interface CommentDefaultValues {
  slug: string;
}
const CommentForm = withFormik<CommentDefaultValues, CommentModel>({
  mapPropsToValues: (props) => {
    return {
      name: "",
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
        url: `https://react-camp-api.roocket.ir/api/nooshifard@yandex.com/article/${props.slug}/comment`,
        values,
      });
      if (data?.message) {
        toast.success("Comment Sended...");
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
  validationSchema: CommentFormSchema,
})(InnerCommentForm);

export default CommentForm;
