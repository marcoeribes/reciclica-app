import { LoadingState } from "./loading/LoadingState";
import { LoginState } from "./login/loginState";

export interface AppState {
    loading: LoadingState;
    login: LoginState;
}