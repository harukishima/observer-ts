export interface User {
  name: string;
  notify(message: string): void;
}
