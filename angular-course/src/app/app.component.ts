import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  password = '';

  onChangeUseLetters() {
    this.includeLetters != this.includeLetters;
  }
  onChangeUseNumbers() {
    this.includeNumbers != this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols != this.includeSymbols;
  }

  onButtonClick() {
    console.log(`
      About to generate the following:
      Include letters: ${this.includeLetters} 
      Include numbers: ${this.includeNumbers} 
      Include symbols: ${this.includeSymbols} 
      `);
    this.password = 'MY PASSWORD!!!';
  }
}
