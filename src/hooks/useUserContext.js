const { UserContext } = require("context/user")
const { useContext } = require("react")

const useUserContext = () => {
  return useContext(UserContext)
}

export default useUserContext;