import {Component, EventEmitter, Output} from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-user-input',
    imports: [FormsModule],
    templateUrl: './user-input.component.html',
    styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  Initial_Investment = '';
  Annual_Investment = '';
  Return_Rate = '5';
  Duration = '10';
@Output() submitData = new EventEmitter<{
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}>();

onSubmit() {
  this.submitData.emit({
    initialInvestment: +this.Initial_Investment,
    annualInvestment: +this.Annual_Investment,
    expectedReturn: +this.Return_Rate,
    duration: +this.Duration
  })
}
  calculateInvestment() {
    const initial = parseFloat(this.Initial_Investment);
    const annual = parseFloat(this.Annual_Investment);
    const rate = parseFloat(this.Return_Rate);
    const duration = parseInt(this.Duration);

console.log(this.Initial_Investment, annual, rate, duration);
  }
}
