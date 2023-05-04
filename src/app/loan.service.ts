import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoanService {


  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

 
  getAllCredits(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/EASE/Credit/AllLoan');
  }
}
