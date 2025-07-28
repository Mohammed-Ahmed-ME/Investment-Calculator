import { Component } from '@angular/core';
import { HeaderComponent } from "./Components/header/header.component";
import { UserInputComponent } from "./Components/user-input/user-input.component";
import {InvestmentResultsComponent} from "./Components/investment-results/investment-results.component";
import {CurrencyPipe, DecimalPipe} from "@angular/common";
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent, CurrencyPipe, DecimalPipe]
})
export class AppComponent {
  submitted :any
  InvestmentResults: any;
  getSubmitted(data:any) {
    this.submitted = data;
    this.calculateInvestmentResults();
  }
   calculateInvestmentResults() {
    const annualData = [];
    let investmentValue = this.submitted.initialInvestment;

    for (let i = 0; i < this.submitted.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (this.submitted.expectedReturn / 100);
      investmentValue += interestEarnedInYear + this.submitted.annualInvestment;
      const totalInterest =
        investmentValue - this.submitted.annualInvestment * year - this.submitted.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: this.submitted.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: this.submitted.initialInvestment + this.submitted.annualInvestment * year,
      });
    }
    this.InvestmentResults = annualData;
  }

}
