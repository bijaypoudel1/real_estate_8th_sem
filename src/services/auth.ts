import axiosClient from "@/lib/axiosInterceptor";

type loginType = {
  username: string;
  password: string;
};

export const userLogin = async (payload: loginType) => {
  const res = await axiosClient.post("/login/", payload);
  return res;
};
