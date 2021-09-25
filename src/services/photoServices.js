import httpClient from "./httpClient";

// Fetch photos relates to album 1
export const getPhotosfromApi = () => {
  return httpClient.get(`/photos?albumId=1`);
};
