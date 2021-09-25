import httpClient from "./httpClient";

export const getUsersfromApi = () => {
  return httpClient.get(`/users`);
};
