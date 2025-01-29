import RequestService from "./requestService";

const PREFIX = "users";

export const registerUserFetch = ({data}) => {
  return RequestService.post(`${PREFIX}/register`, JSON.stringify(data));
};
