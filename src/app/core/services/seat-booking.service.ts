import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeatBookingService {
  apiUrl = 'https://unstopbackend-psk7.onrender.com/';
  options = new HttpHeaders({
    'content-type': 'application/json',
  });

  constructor(private http: HttpClient) { }
  getAvailableSeats() : Observable<any>{
    return this.http.get(`${this.apiUrl}allseats`);
  }

  bookSeats(numberOfSeats: number): Observable<any> {
    return this.http.post(`${this.apiUrl}bookseat`, { numberOfSeats });
  }
}
