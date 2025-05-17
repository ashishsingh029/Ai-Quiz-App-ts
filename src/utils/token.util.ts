const tokenName: string = import.meta.env.JWT_TOKEN_NAME;

export const bearer: string = import.meta.env.JWT_BEARER;
export const getToken = () => localStorage.getItem(tokenName);

export const setToken = (token: string) => {
  localStorage.setItem(tokenName, token);
};

export const removeToken = () => {
  localStorage.removeItem(tokenName);
};