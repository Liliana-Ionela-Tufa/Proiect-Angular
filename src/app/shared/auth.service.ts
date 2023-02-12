import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class AuthService{
  constructor(private fireauth :AngularFireAuth, private router: Router ) { }
  //login
  login(email: string, password: string){
    this.fireauth.signInWithEmailAndPassword(email, password).then ( () =>{
      localStorage.setItem('token', 'true')
      this.router.navigate(['/dashboard']);

    }, err => {
      alert("Something went wrong!");
      this.router.navigate(['/login']);
    })
  }

  getToken(){
    return localStorage.getItem('token');
  }
  isLoggedIn() {
    return this.getToken() == 'true';
  }

   // register
   register(email : string, password : string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then( res => {
      alert("Registration Successful");
      this.router.navigate(['/login']);
    }, err => {
      alert("Something went wrong!");
      this.router.navigate(['/register']);
    })
  }

 // sign out
 logout() {
  this.fireauth.signOut().then( () => {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }, err => {
    alert("Something went wrong!");
  })
}

} 

