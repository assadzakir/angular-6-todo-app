import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private http: HttpClient) { }
//json-server --watch src/db.json --port 4000
  url = 'http://localhost:4000';
  getUsers() {
    return this
            .http
            .get(`${this.url}/results`);
        }
}