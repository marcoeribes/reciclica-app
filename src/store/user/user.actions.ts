import { createAction, props } from "@ngrx/store";
import { User } from "src/app/model/user/User";

export const userLogin = createAction("[User] Login", props<{user: User}>());
export const userLogout = createAction("[User] Logout");