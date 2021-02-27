import { Web3Provider } from '@ethersproject/providers'

// const getLibrary = () => {
//   return new Web3Provider(window.ethereum)
// }

const getLibrary = provider => {
  const library = new Web3Provider(window.ethereum)
  // const library = new Web3Provider(provider, 'any')
  library.pollingInterval = 15000
  return library
}

export default getLibrary;