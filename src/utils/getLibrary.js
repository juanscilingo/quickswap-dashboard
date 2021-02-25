import { Web3Provider } from '@ethersproject/providers'

const getLibrary = () => {
  return new Web3Provider(window.ethereum)
}

export default getLibrary;