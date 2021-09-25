import httpClient from "./httpClient";

export const getPostsfromApi = () => {
  return httpClient.get(`/posts`);
};
