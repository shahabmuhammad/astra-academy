import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidator {
  static passwordShouldMatch(
    control: AbstractControl
  ): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password?.value !== confirmPassword?.value) {
      return { passwordShouldMatch: true };
    }
    return null;
  }
}
