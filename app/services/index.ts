import { api } from "./api";

export const fetchData = async (url: string) => {
  try {
    const { data, status } = await api.get(url);
    return {
      data: data,
      status,
    };
  } catch (e) {
    console.log(e);
  }
};
