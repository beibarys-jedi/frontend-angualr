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
  password = ''; // it is new property
  onButtonClick() {
    // console.log('Button is clicked');
    this.password = 'Password!!!';
  }

  getPassword() {
    return this.password;
  }
}
