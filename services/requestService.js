const API_URL = process.env.NEXT_PUBLIC_API_URL;

const getApi = (url) => {
  return fetch(`${API_URL}${url}`, {
    method: "GET",
    headers: getHeaders(),
  });
};

const postApi = (url, content) => {
  return fetch(`${API_URL}${url}`, {
    method: "POST",
    body: content,
    headers: getHeaders(),
  });
};

const putApi = (url, content) => {
  return fetch(`${API_URL}${url}`, {
    method: "PUT",
    body: JSON.stringify(content),
    headers: getHeaders(),
  });
};

const deleteApi = (url, content) => {
  return fetch(`${API_URL}${url}`, {
    method: "DELETE",
    body: content,
    headers: getHeaders(),
  });
};

const getHeaders = () => {
  return {
    "Content-Type": "application/json",
  };
};

const requestService = {
  get: getApi,
  post: postApi,
  put: putApi,
  delete: deleteApi,
};

export default requestService;
