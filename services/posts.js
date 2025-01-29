import RequestService from "./requestService";

const PREFIX = "posts";

export const getAllPostsFetch = () => {
  return RequestService.get(`${PREFIX}/getAll`);
};

export const createPostFetch = ({data}) => {
  return RequestService.post(`${PREFIX}/create`, JSON.stringify(data));
};

export const updatePostFetch = ({id, data}) => {
  return RequestService.put(`${PREFIX}/update/${id}`, JSON.stringify(data));
};

export const deletePostFetch = ({id}) => {
  return RequestService.delete(`${PREFIX}/delete/${id}`);
};