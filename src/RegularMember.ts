import { User } from './User';

export class RegularMember implements User {
  constructor(name: string, timeSpent: number) {
    this.name = name;
    this.timeSpent = timeSpent;
  }
  name: string;
  timeSpent: number;
  notify(message: string): void {
    console.log(`${this.name} got notified: ${message}`);
  }
}
