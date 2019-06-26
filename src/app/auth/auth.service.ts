import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthData} from './auth-data.model';

@Injectable(
  {providedIn: 'root'}
)
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {
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

  logoutUser() {
    this.afAuth.auth.signOut();
  }
}
