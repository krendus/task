import React from 'react';

export interface IUser {
  email: string;
  password: string;
  authorized: boolean;
}
export interface IUserContext {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
}
