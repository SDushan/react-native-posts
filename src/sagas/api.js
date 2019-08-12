const URI = "https://jsonplaceholder.typicode.com";

function* getPostsfromApi() {
  const response = yield fetch(URI + "/posts").then(response =>
    response.json()
  );
  return yield response;
}

function* getUsersfromApi() {
  const response = yield fetch(URI + "/users").then(response =>
    response.json()
  );
  return yield response;
}

function* getPhotosfromApi() {
  const response = yield fetch(URI + "/photos?albumId=1").then(response =>
    response.json()
  );
  return yield response;
}

export const Api = {
  getPostsfromApi,
  getUsersfromApi,
  getPhotosfromApi
};
