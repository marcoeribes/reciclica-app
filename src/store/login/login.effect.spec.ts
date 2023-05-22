import { Action, StoreModule } from "@ngrx/store";
import { LoginEffects } from "./login.effects"
import { Observable, of, throwError } from "rxjs";
import { recoverPassword, recoverPasswordSuccess } from "./login.actions";
import { TestBed } from "@angular/core/testing";
import { EffectsModule } from "@ngrx/effects";
import { provideMockActions } from "@ngrx/effects/testing"
import { AuthService } from "src/app/services/auth/auth.service";

fdescribe('Login effects', () => {

    let effects: LoginEffects;
    let actions$: Observable<Action>;
    let error = {error: 'error'};
    let authServiceMock = {
        recoverEmailPassword: (email: string) => {
            if (email == "error@email.com"){
                return throwError(error);
            }
            return of({})
        }
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot([]),
                EffectsModule.forRoot([]),
                EffectsModule.forFeature([
                    LoginEffects 
                ])
            ],
            providers: [
                provideMockActions(() => actions$)
            ]
        })
        effects = TestBed.inject(LoginEffects);
    })

    it('should recover password with existing email return success', (done) => {
        actions$ = of(recoverPassword({email: "valid@emial.com"}));

        effects.recoverPassword$.subscribe(newAction => {
            expect(newAction).toEqual(recoverPasswordSuccess());
            done();
            
        });
    })
})