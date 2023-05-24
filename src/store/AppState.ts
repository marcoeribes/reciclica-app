import { LoadingState } from "./loading/LoadingState";
import { LoginState } from "./login/loginState";
import { RegisterState } from "./register/RegisterState";
import { UserState } from "./user/UserState";

export interface AppState {
    loading: LoadingState;
    login: LoginState;
    register: RegisterState;
    user: UserState;
}