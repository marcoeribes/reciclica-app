import { LoadingState } from "./loading/LoadingState";
import { LoginState } from "./login/loginState";
import { RegisterState } from "./register/RegisterState";

export interface AppState {
    loading: LoadingState;
    login: LoginState;
    register: RegisterState;
}