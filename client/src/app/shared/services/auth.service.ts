import { Injectable } from '@angular/core';
import { User } from '../interfaces';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {

    }
    
    login(user: User) {

    }

    register() {

    }
}