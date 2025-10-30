export enum Role {
  Admin = 'admin',
  Editor = 'editor',
  Moderator = 'moderator',
  Guest = 'guest'
}

export enum Status {
  Online = 'online',
  Offline = 'offline'
}


export interface User {
  id: string,
  name: string,
  email: string,
  role: Role,
  status: Status
}