import RequestService from "./requestService";

const PREFIX = "posts";

export const getAllPostsByUserFetch = ({ id }) => {
  return RequestService.get(`${PREFIX}/getAllPostByUser/${id}`);
};

export const createPostFetch = ({ data }) => {
  return RequestService.post(`${PREFIX}/create`, JSON.stringify(data));
};

export const updatePostFetch = ({ id, data }) => {
  return RequestService.post(`${PREFIX}/update/${id}`, JSON.stringify(data));
};

export const deletePostFetch = ({ id }) => {
  return RequestService.delete(`${PREFIX}/delete/${id}`);
};

export const getAllPostByUserFilteredFetch = ({ id, searchText }) => {
  return RequestService.get(
    `${PREFIX}/getAllPostsByUserFiltered/${id}?searchText=${searchText}`
  );
};
