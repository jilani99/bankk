import { Component, OnInit } from '@angular/core';
import { LoanService } from 'src/app/loan.service';




@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {


  allC:any[] = [];
  credit: any;
  id: number=0;

  constructor(private loanService: LoanService) { }

  ngOnInit(): void {

    this.loanService.getAllCredits().subscribe(data => {
      console.log(data);
      this.allC = data;
    });

    
  }

 /* getCredit(): void {
    this.loanService.getCredit(this.id)
      .subscribe(
        data => {
          this.credit = data;
        },
        error => {
          console.log(error);
        });
  }*/

  

}
