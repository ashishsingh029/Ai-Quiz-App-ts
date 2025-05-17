import API_PATHS from "@/utils/apiPaths.util";
import API from "@/utils/axiosInstance.util";

export const registerUserFn = async (data: any) => {
    await API.post(API_PATHS.AUTH.REGISTER, data);
}

export const loginUserFn = async (data: any) => {
    await API.post(API_PATHS.AUTH.LOGIN, data);
}

// export const logoutUserFn = async () => {

// }