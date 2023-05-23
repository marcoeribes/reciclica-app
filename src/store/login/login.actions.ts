import { createAction, props } from "@ngrx/store";
import { User } from "src/app/model/user/User";

export const login = createAction("[Login");
export const loginSuccess = createAction("[Login] success", props<{user: User}>());
export const loginFail = createAction("[Login] fail", props<{error: any}>())