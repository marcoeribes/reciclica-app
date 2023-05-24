import { createReducer, on } from '@ngrx/store';
import { userLogin, userLogout } from './user.actions';
import { UserState } from './UserState';
import { AppInitialState } from "../AppInitialState";

const userState: UserState = AppInitialState.userState;

const reducer = createReducer(userState,
    on(userLogin, (state, { user }) => {
        return {
            ...state,
            user: user,
        }
    }),
    on(userLogout, state => {
        return {
            ...state,
            user: null,
        }
    }),
    )

export function userReducer(state: UserState, action: any){
    return reducer(state, action);
}