import { User } from './User';

export class Group {
  private users: User[] = [];

  public addUser(user: User): void {
    this.users.push(user);
  }

  public removeUser(user: User): void {
    this.users = this.users.filter((u) => u !== user);
  }

  public notify(message: string): void {
    this.users.forEach((u) => u.notify(message));
  }
}
