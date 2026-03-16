import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../../ui/icon/icon.component';

@Component({
  selector: 'app-signin-form',
  imports: [CommonModule, RouterModule, FormsModule, IconComponent],
  templateUrl: './signin-form.component.html',
})
export class SigninFormComponent {
  showPassword = false;
  email = '';
  password = '';

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSignIn() {
    console.log('Sign in:', this.email);
  }
}
