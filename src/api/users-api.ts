import { useQuery } from "@tanstack/react-query";
import { request } from "../config/axios.config";

const fetchUsers = () => {
  return request({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "get",
  });
};

export const useGetUsersData = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
};
