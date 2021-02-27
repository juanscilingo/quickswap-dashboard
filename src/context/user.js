const { createContext, useState } = require("react");

const INITIAL_VALUE = {
  account: null
}

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(INITIAL_VALUE);

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}