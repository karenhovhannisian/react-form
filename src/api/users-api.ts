import { useMutation, useQuery } from "@tanstack/react-query";
import { request } from "../config/axios.config";
import { CompanyContactType } from "../ts/types/company";

const fetchUsers = () => {
  return request({
    url: "http://138.2.156.118:6443/apollo/company/cnn.com",
    method: "get",
  });
};
export const createCompanyContactRequest = (data: CompanyContactType) => {
  return request({
    url: "http://138.2.156.118:2379/contacts",
    method: "post",
    data,
  });
};

export const useGetUsersData = () => {
  return useQuery({
    queryKey: ["company.ts"],
    queryFn: fetchUsers,
  });
};

export const useCreateCompanyContact = (
  onSuccess: (data: CompanyContactType) => void,
  onError: (data: Error) => void,
) => {
  return useMutation({
    mutationFn: createCompanyContactRequest,
    onSuccess,
    onError,
  });
};
