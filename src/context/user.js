const { createContext, useState, useEffect } = require("react");

const INITIAL_VALUE = {
  account: null
}

const USER_CONTEXT_KEY = 'user-context';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const userFromLocalStorage = window.localStorage.getItem(USER_CONTEXT_KEY);
  const initialUser = userFromLocalStorage ? JSON.parse(userFromLocalStorage) : INITIAL_VALUE;
  const [user, setUser] = useState(initialUser);

  useEffect(() =>{
    window.localStorage.setItem(USER_CONTEXT_KEY, JSON.stringify(user))
  }, [user]);

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}