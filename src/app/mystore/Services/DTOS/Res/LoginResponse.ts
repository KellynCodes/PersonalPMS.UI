export interface LoginResponse {
  jwtToken: string;
  userType: string;
  userName: string;
  birthday: true;
  twoFactor: true;
  emailSent: true;
  data: string;
  success: boolean;
  status: number;
  message: string;
}
