import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthData} from './auth-data.model';
import {Store} from '@ngrx/store';
import * as fromRoot from '../app.reducer';
import * as Auth from './auth.actions';
import {Router} from '@angular/router';

@Injectable(
  {providedIn: 'root'}
)
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private store: Store<fromRoot.State>, private router: Router) {
  }

  loginUser(authData: AuthData) {
    console.log(authData);
    this.afAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
          console.log(result);
        }
      )
      .catch(error => {
        console.log(error);
      });
  }

  registerUser(authData: AuthData) {
    this.afAuth.auth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }

  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.store.dispatch(new Auth.SetAuthenticated());
      } else {
        this.store.dispatch(new Auth.SetUnauthenticated());
      }
    });
  }

  logoutUser() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }
}
