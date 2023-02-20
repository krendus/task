import React, { FunctionComponent, useState } from 'react';
import { IUser, IUserContext } from '../interfaces/user';
interface IContextProps {
  children: React.ReactNode;
}
export const UserContext = React.createContext<IUserContext | null>(null);
const ContextProvider: FunctionComponent<IContextProps> = ({ children }) => {
  const [user, setUser] = useState<IUser>({
    email: 'samuel@moneeyapp.com',
    password: 'password',
    authorized: false
  });
  const store: IUserContext = {
    user,
    setUser
  };
  return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
};
export default ContextProvider;
