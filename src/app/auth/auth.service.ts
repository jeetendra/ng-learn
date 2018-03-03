import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class Auth {
    URL = "http://localhost:4321/auth";
    constructor(private http:HttpClient) {}

    getHeader() {
        
    }

    isLoggedIn() {
        return !!localStorage.getItem('token');
    }

    login(data) {
        this.http.post(this.URL + '/login', data).subscribe(function(response:any) {
            console.log('Logged In ')
            if(response.success) {
                localStorage.setItem('token', response.token)
            }
            
        })
    }

    logout() {
        this.http.get(this.URL + '/logout').subscribe(function() {
            console.log('Logged out ');
            localStorage.removeItem('token');
        })
    }
}