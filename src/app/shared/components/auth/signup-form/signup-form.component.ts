import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../../ui/icon/icon.component';

@Component({
  selector: 'app-signup-form',
  imports: [CommonModule, RouterModule, FormsModule, IconComponent],
  templateUrl: './signup-form.component.html',
})
export class SignupFormComponent {
  showPassword = false;
  email = '';
  password = '';

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
