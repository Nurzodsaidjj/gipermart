import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/data/data";

const useGetLaptops = (path = "computers") => {
  return useQuery({
    queryKey: [path],
    queryFn: () => request.get(`/${path}`).then((res) => res.data),
  });
};

export default useGetLaptops;
