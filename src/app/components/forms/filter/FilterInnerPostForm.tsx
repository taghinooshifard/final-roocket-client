import PostModel from "../../../models/PostModel";
import { Form, FormikProps } from "formik";
import Link from "next/link";
import InputControl from "../../controls/Input";
import { MdOutlineDescription, MdOutlineSubtitles } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import SelectBoxData from "../../controls/selectBoxData";
type PostFormProps = FormikProps<PostModel> & {
  post: PostModel;
};

export default function FilterInnerPostForm(params: PostFormProps) {
  return (
    <div className="flex  py-2 px-2 grid-cols-6  ">
      <Form className="flex flex-col gap-4">
        <InputControl
          label="Post Title:"
          id="title"
          name="title"
          type="text"
          placeholder="Enter Title..."
          icon={MdOutlineSubtitles}
        />
        <SelectBoxData
          label="Category:"
          id="category_id"
          name="category_id"
          icon={BiSolidCategory}
          fetchUrl={`https://react-camp-api.roocket.ir/api/nooshifard@yandex.com/all-article-categories`}
          firstOption={"Please Select"}
        />

        <div className="flex justify-center mt-16 py-5 gap-2">
          <button
            disabled={params.isSubmitting}
            className="bg-blue-500 px-5 py-2 rounded-md"
            type="submit"
          >
            Search Post
          </button>
          <Link href={`/`} as={`/`} className="bg-red-500 px-5 py-2 rounded-md">
            Cancel
          </Link>
        </div>
      </Form>
    </div>
  );
}
