import { User, Role, Status } from '../model/types';

export const users: User[] = [
  { id: "1", name: "Simon", email: "simon@gmail.com", role: Role.Admin, status: Status.Online },
  { id: "2", name: "Jogn", email: "john@gmail.com", role: Role.Editor, status: Status.Online },
  { id: "3", name: "Alice", email: "alice@gmail.com", role: Role.Guest, status: Status.Offline },
  { id: "4", name: "Bob", email: "bob@gmail.com", role: Role.Guest, status: Status.Offline },
  { id: "5", name: "Troy", email: "troy@gmail.com", role: Role.Admin, status: Status.Offline },
  { id: "6", name: "Antony", email: "antony@gmail.com", role: Role.Editor, status: Status.Offline },
  { id: "7", name: "Homer", email: "homer@gmail.com", role: Role.Guest, status: Status.Online},
  { id: "8", name: "Fray", email: "fray@gmail.com", role: Role.Guest, status: Status.Online },
];