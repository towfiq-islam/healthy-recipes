import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SITE_URL,
  withCredentials:true
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
