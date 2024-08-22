import { Get } from "../tools/ApiManager";
import useSWRImmutable from "swr/immutable";
import useSWR from "swr";
import { useRef } from "react";
interface Props {
  url: string;
}
export default function useData(props: Props) {
  const random = useRef(new Date());
  const { data, error, isLoading, mutate } = useSWR(
    {
      url: props.url,
      random,
    },
    Get,
    {
      refreshInterval: 0,
      refreshWhenHidden: false,
      refreshWhenOffline: false,
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      errorRetryInterval: 1000 * 3600,
    }
  );
  return {
    data: data,
    error,
    loading: isLoading,
    mutate,
  };
}
