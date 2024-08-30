import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserData } from '../user.model';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, CommonModule, LoginComponent],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {
  islogin: boolean = false;
  @Output() userAuthenticated = new EventEmitter<boolean>();

  Onlogin() {
    this.islogin = true;
  }
  Onsignup() {
    this.islogin = false;
  }
  Onsubmit(userdata: UserData) {
    console.log(`userdata is ${JSON.stringify(userdata)}`);
  }
  onuserAuthenticated(auth: boolean) {
    this.userAuthenticated.emit(auth);
  }
  passwordsMatch(registerform: NgForm): boolean {
    const password = registerform.form.get('password')?.value;
    const repeatPassword = registerform.form.get('repeatPassword')?.value;
    return (
      password === repeatPassword && password?.length === repeatPassword?.length
    );
  }
}
