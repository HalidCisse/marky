
import { AbstractControl } from '@angular/forms';
export const PasswordMatcher = (control: AbstractControl): {[key: string]: boolean} => {
  const password        = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (!password || !confirmPassword) {
    return null;
  }

  return password.value === confirmPassword.value ? null : { noPasswordMatch: true };
};
