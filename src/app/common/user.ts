export interface User {
  id?: string;
  firstName: string | '';
  secondName: string;
  email: string;
  password?: string;
  phoneNumber: string;
  address: string;
  role?: string;
}
