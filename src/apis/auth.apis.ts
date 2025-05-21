import type { LoginRequestType, RegisterResponseType, RegisterRequestType, LoginResponseType } from "@/types/auth.type";
import API_PATHS from "@/utils/apiPaths.util";
import API from "@/utils/axiosInstance.util";

export const registerUserFn: RegisterResponseType | any = async (data: RegisterRequestType) => {
    console.log(data);
    await API.post(API_PATHS.AUTH.REGISTER, data);
    return "Registered";
}

export const loginUserFn: LoginResponseType | any = async (data: LoginRequestType) => {
    console.log(data);
    await API.post(API_PATHS.AUTH.LOGIN, data);
    return "Logged IN";
}

// export const logoutUserFn = async () => {

// }