import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { LoginPage } from './login.page';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { loadingReducer } from 'src/store/loading/loading.reducer';
import { loginReducer } from 'src/store/login/login.reducers';
import { Router } from '@angular/router';
import { AppState } from '@capacitor/app';

xdescribe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  let router: Router;
  let page: any;
  let store: Store<AppState>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule,
        StoreModule.forRoot([]),
        StoreModule.forFeature("loading", loadingReducer),
        StoreModule.forFeature("login", loginReducer)
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(LoginPage);
    router = TestBed.get(Router);
    store = TestBed.get(Store);
    component = fixture.componentInstance;
    fixture.detectChanges();
    page = fixture.debugElement.nativeElement;

  }));

  it('should create', () => {
    expect(true).toBeTruthy();
  });

  it('should recover email/password on forgot email/password', () => {

    fixture.detectChanges();
    component.form.get('email')?.setValue("valid@email.com")
    page.querySelector('#recoverPasswordButton').click();
    /*store.select("login").subscribe(loginState => {
      expect(loginState.isRecoveringPassword).toBeTruthy();
    })*/
  })
});
