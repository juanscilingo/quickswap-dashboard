import axios from "axios";

const fetcher = {
  get: req => axios.get(req).then(r => r.data)  
}

export default fetcher;