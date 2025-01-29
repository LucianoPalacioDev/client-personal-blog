import Cookies from "js-cookie";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const token = Cookies.get("token") || "";

const getToken = () => token;

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
    auth: getToken(),
  };
};

const requestService = {
  get: getApi,
  post: postApi,
  put: putApi,
  delete: deleteApi,
};

export default requestService;
