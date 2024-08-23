"use client";
import { withFormik } from "formik";
import * as yup from "yup";
import PostModel from "@/app/models/PostModel";
import FilterInnerPostForm from "./FilterInnerPostForm";
const PostFormSchema = yup.object().shape({});
export interface PostDefaultValues {
  filterFunc: (filter: string) => void;
}
const FilterPostForm = withFormik<PostDefaultValues, PostModel>({
  mapPropsToValues: (props) => {
    return {
      title: "",
      slug: "",
      is_published: false,
      category_id: 0,
      content: "",
      image_url: "",
      comments: [],
    };
  },
  handleSubmit: async (values, { props, setFieldError, setSubmitting }) => {
    let queryFilter = "";
    if (values?.title && values?.title?.length > 0)
      queryFilter = `&title=${values?.title}`;
    if (values?.category_id && values?.category_id > 0)
      queryFilter += `&category_id=${values?.category_id}`;

    if (queryFilter.length > 0) props.filterFunc(queryFilter);
  },
  validationSchema: PostFormSchema,
})(FilterInnerPostForm);

export default FilterPostForm;
