import { StoreModule } from "@ngrx/store";
import { loadingReducer } from "./loading/loading.reducer";
import { loginReducer } from "./login/login.reducers";
import { registerReducer } from "./register/register.reducers"
import { userReducer } from "./user/user.reducers";

export const AppStoreModule = [
    StoreModule.forRoot([]),
    StoreModule.forFeature("loading", loadingReducer),
    StoreModule.forFeature("login", loginReducer ),
    StoreModule.forFeature("register", registerReducer),
    StoreModule.forFeature("user", userReducer)
]