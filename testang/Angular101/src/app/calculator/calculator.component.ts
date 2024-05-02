import { Component } from '@angular/core';
import {Calculator} from "./calculator";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-calculator',
  standalone: true,
    imports: [
        FormsModule,
        NgIf
    ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  calc:Calculator = new Calculator();
}


