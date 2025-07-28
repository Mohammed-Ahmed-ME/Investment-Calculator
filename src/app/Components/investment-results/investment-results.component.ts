import {Component, Input} from '@angular/core';
import {CurrencyPipe, DecimalPipe} from "@angular/common";

@Component({
    selector: 'app-investment-results',
    imports: [
        CurrencyPipe,
        DecimalPipe
    ],
    templateUrl: './investment-results.component.html',
    styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input({required: true}) results: any;

}
