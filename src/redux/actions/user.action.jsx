import { userConstants } from "../constants";
export function LoginUser(user) {
    return {
        type: userConstants.LOGIN_REQUEST,
        user
    }
}

// export function LogoutUser() {
//     return {
//         type: userConstants.LOGOUT
//     }
// }

export function RegisterUser(user) {
    return {
        type: userConstants.REGISTER_REQUEST,
        user
    }
}

