import { createReducer, on } from "@ngrx/store";
import { LoginState } from "./loginState";
import { recoverPassword, recoverPasswordFail, recoverPasswordSuccess } from "./login.actions";
import { AppInitialState } from "../AppInitialState";

const initialState: LoginState = AppInitialState.login;

const reducer = createReducer(initialState,
    on(recoverPassword, currentState => {
        return {
            ...currentState,
            error: null,
            recoveredPassword: false,
            isRecoveringPassword: true
        }
    }),
    on(recoverPasswordSuccess, currentState => {
        return {
            ...currentState,
            error: null,
            recoveredPassword: true,
            isRecoveringPassword: false
        }
    }),
    on(recoverPasswordFail, (currentState, action) => {
        return {
            ...currentState,
            error: action.error,
            recoveredPassword: false,
            isRecoveringPassword: false
        }
    })
);
 
export function loginReducer(state: LoginState, action: any){
    return reducer(state, action);
}