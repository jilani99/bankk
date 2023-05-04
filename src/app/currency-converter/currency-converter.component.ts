import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {
  fromCurrency = 'USD';
  toCurrency = 'EUR';
  amount!: number;
  result!: number;

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  convert() {
    this.http.get<any>(`https://api.exchangeratesapi.io/latest?base=${this.fromCurrency}&symbols=${this.toCurrency}`)
      .subscribe(data => {
        this.result = data.rates[this.toCurrency] * this.amount;
      });
  }
}


