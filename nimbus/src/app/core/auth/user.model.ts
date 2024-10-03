export interface AuthenticationResponse {
  data: {
    token: string;
  };
}

export interface AuthenticationRequest {
  "email":string,
  "password":string
}

export interface SignupRequest {
  "email":string,
  "password":string,
  "name":string,
  "lastName":string
}

export interface SignupResponse {
  "id":string;
  "createdDate": string
}
