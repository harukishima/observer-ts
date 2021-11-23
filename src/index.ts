import { NormalMember } from './NormalMember';
import { RegularMember } from './RegularMember';
import { User } from './User';
import { Group } from './Group';

const group = new Group();
group.addUser(new NormalMember('John'));
group.addUser(new RegularMember('Mary', 10));
group.addUser(new RegularMember('Bob', 5));
group.notify('Hello');
