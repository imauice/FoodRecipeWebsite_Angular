import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface AuthResponceData {
  idToken: string;  //A Firebase Auth ID token for the newly created user.
  email: string;  //The email for the newly created user.
  refreshToken: string;   //A Firebase Auth refresh token for the newly created user.
  expiresIn: string;  //The number of seconds in which the ID token expires.
  localId: string;  //The uid of the newly created user
  registered?:boolean;   //Whether the email is for an existing account.
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  signup(email: string, password: string) {
    return this.http
      .post<AuthResponceData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD6pjJ-aeLuJgdLEi_vz2qSPtY8EoIcCHw',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError((error) => {
          let errorMessage = 'An Error Ocured';
          if (!error.error || !error.error.error) {
            return throwError(errorMessage);
          }
          switch (error.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessage = 'Email is already Exsists';
          }
          return throwError(errorMessage);
        })
      );
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponceData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD6pjJ-aeLuJgdLEi_vz2qSPtY8EoIcCHw',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }
}
