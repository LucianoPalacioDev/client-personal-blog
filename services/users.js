import RequestService from "./requestService";

const PREFIX = "users";

export const registerUserFetch = ({data}) => {
  return RequestService.post(`${PREFIX}/register`, JSON.stringify(data));
};

export const loginUserFetch = ({data}) => {
  return RequestService.post(`${PREFIX}/login`, JSON.stringify(data));
};

export const getUserDataByIdFetch = () => {
  return RequestService.get(`${PREFIX}/getUserData`);
};