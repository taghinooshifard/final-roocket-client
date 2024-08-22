import Spinner from "./Spinner";

interface Props {
  className?: string;
  message: string;
}
export default function LoadingSpinner(props: Props) {
  return (
    <button
      disabled
      type="button"
      className={`text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center ${props.className}`}
    >
      <Spinner />
      {props.message}
    </button>
  );
}
