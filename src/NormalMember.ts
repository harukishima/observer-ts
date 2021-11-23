import { User } from './User';

export class NormalMember implements User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  notify(message: string): void {
    console.log(`${this.name} got notified: ${message}`);
  }
}
