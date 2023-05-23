import { createAction, props } from "@ngrx/store";
import { User } from "src/app/model/user/User";

export const register = createAction('[Register]', props<{userRegister: User}>());
export const registerSuccess = createAction('[Register] success');
export const registerFail = createAction('[Register] fail', props<{error: any}>());