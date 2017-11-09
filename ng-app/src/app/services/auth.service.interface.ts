export interface AuthServiceInterface {
  isAuthenticated(): void;

  logIn (formData): void;

  logOut (): void;
}
